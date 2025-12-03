import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerformanceChartComponent } from './components/performance-chart/performance-chart.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailComponent } from './pages/employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { ToastComponent } from './components/toast/toast.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    PerformanceChartComponent,
    RecentActivityComponent,
    EmployeeTableComponent,
    AddCandidateComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
