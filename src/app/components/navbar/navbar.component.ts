import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  private search$ = new Subject<string>();
  private sub = new Subscription();

  constructor(private svc: EmployeeService) {
    this.sub.add(
      this.search$
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((term) => this.svc.search(term))
    );
  }

  toggleSidebar() {
    const sb = document.getElementById('appSidebar');
    const ov = document.getElementById('overlay');
    if (sb && ov) {
      if (sb.classList.contains('open')) {
        sb.classList.remove('open');
        ov.style.display = 'none';
      } else {
        sb.classList.add('open');
        ov.style.display = 'block';
      }
    }
  }

  onSearch(term: string) {
    this.search$.next(term || '');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
