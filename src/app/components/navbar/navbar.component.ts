import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  private search$ = new Subject<string>();
  private sub = new Subscription();

  constructor(private svc: EmployeeService, private sidebar: SidebarService) {
    this.sub.add(
      this.search$.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(term => this.svc.search(term))
    );
  }

  toggleSidebar(){
    this.sidebar.toggleOpen();
  }

  onSearch(term: string){
    this.search$.next(term || '');
  }

  ngOnDestroy(){ this.sub.unsubscribe(); }
}
