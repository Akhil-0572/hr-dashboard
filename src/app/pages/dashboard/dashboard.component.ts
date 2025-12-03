import { Component, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{
  lastUpdated = new Date().toLocaleString();
  joinedThisMonth = 0;
  sub = new Subscription();

  constructor(private svc: EmployeeService){
    this.sub.add(this.svc.employees$.subscribe(()=> {
      this.joinedThisMonth = this.svc.joinedThisMonthCount();
    }));
  }

  openAdd(){ this.svc.openAdd(); }

  ngOnDestroy(){ this.sub.unsubscribe(); }
}
