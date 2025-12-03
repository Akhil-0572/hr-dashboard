import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage { id: number; text: string; }

@Injectable({ providedIn: 'root' })
export class ToastService {
  private bus = new Subject<ToastMessage>();
  messages$ = this.bus.asObservable();
  private id = 0;

  show(text: string){
    const msg = { id: ++this.id, text };
    this.bus.next(msg);
    return msg.id;
  }
}
