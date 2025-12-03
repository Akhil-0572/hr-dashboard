import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  view: Employee[] = [];

  @Input() showActions = true;

  // sorting
  sortKey: keyof Employee | '' = '';
  sortDir: 1 | -1 = 1;

  // pagination
  pageSize = 5;
  currentPage = 1;
  totalPages = 1;

  constructor(private svc: EmployeeService, private router: Router){
    this.svc.employees$.subscribe(x => {
      this.employees = x;
      this.currentPage = 1;
      this.applySortAndPaginate();
    });
  }

  ngOnInit(){}

  openEmployee(e: Employee){ this.router.navigate(['/employees', e.id]); }

  edit(e: Employee){ this.svc.openEdit(e); }
  remove(e: Employee){ if(confirm('Delete this employee?')) this.svc.delete(e.id); }

  setSort(key: keyof Employee){
    if(this.sortKey === key) this.sortDir = -this.sortDir as 1 | -1;
    else { this.sortKey = key; this.sortDir = 1; }
    this.applySortAndPaginate();
  }

  applySortAndPaginate(){
    let arr = [...this.employees];
    if(this.sortKey){
      arr.sort((a:any,b:any)=>{
        const A = (a[this.sortKey] ?? '').toString().toLowerCase();
        const B = (b[this.sortKey] ?? '').toString().toLowerCase();
        if(A < B) return -1 * this.sortDir;
        if(A > B) return 1 * this.sortDir;
        return 0;
      });
    }
    this.totalPages = Math.max(1, Math.ceil(arr.length / this.pageSize));
    if(this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.view = arr.slice(start, start + this.pageSize);
  }

  goto(page:number){
    if(page < 1) page = 1;
    if(page > this.totalPages) page = this.totalPages;
    this.currentPage = page;
    this.applySortAndPaginate();
  }
}
