import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  showModal$: Observable<boolean>;
  constructor(private svc: EmployeeService){ this.showModal$ = this.svc.showModal$; }

  closeSidebar(){
    const sb = document.getElementById('appSidebar');
    const ov = document.getElementById('overlay');
    if(sb){ sb.classList.remove('open'); }
    if(ov){ ov.style.display = 'none'; }
  }
}
