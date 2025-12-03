import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  // when true the shell will be in "collapsed" (narrow) mode on desktop
  private _collapsed$ = new BehaviorSubject<boolean>(false);
  collapsed$ = this._collapsed$.asObservable();

  // when true the mobile overlay sidebar is open
  private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();

  toggleCollapsed() {
    this._collapsed$.next(!this._collapsed$.value);
  }

  open() {
    this._open$.next(true);
  }
  close() {
    this._open$.next(false);
  }
  toggleOpen() {
    this._open$.next(!this._open$.value);
  }
}
