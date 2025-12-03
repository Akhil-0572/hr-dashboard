import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { SidebarService } from './services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showModal$: Observable<boolean>;
  collapsed$: Observable<boolean>;
  open$: Observable<boolean>;

  constructor(
    private svc: EmployeeService,
    private sidebar: SidebarService
  ) {
    this.showModal$ = this.svc.showModal$;
    this.collapsed$ = this.sidebar.collapsed$;
    this.open$ = this.sidebar.open$;
  }

  closeSidebar() {
    this.sidebar.close();
  }
}
