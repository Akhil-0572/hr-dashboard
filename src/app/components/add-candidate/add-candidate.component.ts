import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnDestroy {
  model: Partial<Employee> = {};
  editing: Employee | null = null;
  sub = new Subscription();

  constructor(private svc: EmployeeService, private toast: ToastService){
    this.sub.add(this.svc.editing$.subscribe(x=>{
      this.editing = x;
      this.model = x ? {...x} : { name:'', email:'', role:'', team:'', location:'' };
    }));
  }

  submit(){
    if(this.editing){
      this.svc.update(this.model as Employee);
      this.toast.show('Updated successfully');
    } else {
      this.svc.add(this.model);
      this.toast.show('Added successfully');
    }
    this.svc.closeModal();
  }

  close(){ this.svc.closeModal(); }
  ngOnDestroy(){ this.sub.unsubscribe(); }
}
