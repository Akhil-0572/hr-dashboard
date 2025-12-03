import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-detail',
  template: `
  <div class="card detail-card" *ngIf="emp; else missing">
    <div class="detail-head">
      <div>
        <h2>{{ emp.name }}</h2>
        <div class="muted">{{ emp.role }} • {{ emp.team }}</div>
      </div>
      <div class="actions">
        <button class="btn" (click)="edit()">Edit</button>
        <button class="btn ghost" (click)="remove()">Delete</button>
        <button class="btn" routerLink="/employees">Back</button>
      </div>
    </div>

    <div class="detail-grid">
      <div><strong>Email</strong><div class="muted">{{ emp.email }}</div></div>
      <div><strong>Location</strong><div class="muted">{{ emp.location }}</div></div>
      <div><strong>Joined</strong><div class="muted">{{ emp.join }}</div></div>
      <div><strong>Status</strong><div class="muted">{{ emp.status }}</div></div>
    </div>

    <section style="margin-top:12px">
      <h4>Notes</h4>
      <p class="muted">This is a demo detail page. Connect to backend to show real notes, performance, documents, etc.</p>
    </section>
  </div>

  <ng-template #missing>
    <div class="card">
      <h3>Employee not found</h3>
      <p class="muted">There is no employee with id {{ id }}</p>
      <button class="btn" routerLink="/employees">Back to list</button>
    </div>
  </ng-template>
  `,
  styles: [`
    .detail-card{padding:16px}
    .detail-head{display:flex;justify-content:space-between;align-items:center;gap:12px}
    .detail-head h2{margin:0}
    .muted{color:#6b7280;font-size:13px}
    .actions{display:flex;gap:8px;align-items:center}
    .detail-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
    @media(max-width:700px){.detail-grid{grid-template-columns:1fr}}
  `]
})
export class EmployeeDetailComponent implements OnInit {
  id: string | null = null;
  emp: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private svc: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const idNum = Number(this.id);
      this.emp = this.svc.getById(idNum);
    }
  }

  edit(){
    if(this.emp) {
      this.svc.openEdit(this.emp);
      // open modal; stay on detail page — modal is global
    }
  }

  remove(){
    if(!this.emp) return;
    if(confirm('Delete this employee?')) {
      this.svc.delete(this.emp.id);
      this.router.navigate(['/employees']);
    }
  }
}
