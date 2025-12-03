import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnDestroy{
  msgs: ToastMessage[] = [];
  sub = new Subscription();

  constructor(private svc: ToastService){
    this.sub.add(this.svc.messages$.subscribe(m=>{
      this.msgs.push(m);
      setTimeout(()=> this.msgs = this.msgs.filter(x => x.id !== m.id), 3000);
    }));
  }

  ngOnDestroy(){ this.sub.unsubscribe(); }
}
