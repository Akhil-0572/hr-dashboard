import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailComponent } from './pages/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
