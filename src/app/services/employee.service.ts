import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private master: Employee[] = [
    {id:1,name:'John Doe',team:'Engineering',role:'Senior Eng',status:'Active',location:'Bengaluru',join:'2019-06-12',email:'john@x.com'},
    {id:2,name:'Sara Lee',team:'HR',role:'Recruiter',status:'Active',location:'Hyderabad',join:'2020-02-19',email:'sara@x.com'},
    {id:3,name:'Liam Ng',team:'Product',role:'PM',status:'On leave',location:'Chennai',join:'2018-11-05',email:'liam@x.com'},
    {id:4,name:'Rita K',team:'Design',role:'Designer',status:'Active',location:'Pune',join:'2021-03-20',email:'rita@x.com'},
    {id:5,name:'Anoop R',team:'Engineering',role:'Developer',status:'Active',location:'Kochi',join:'2022-01-08',email:'anoop@x.com'},
    {id:6,name:'Priya S',team:'Sales',role:'Executive',status:'Active',location:'Mumbai',join:'2017-09-12',email:'priya@x.com'},
    {id:7,name:'Jason M',team:'Engineering',role:'DevOps',status:'Active',location:'Bengaluru',join:'2016-04-23',email:'jason@x.com'},
    {id:8,name:'Kavya P',team:'HR',role:'Manager',status:'Active',location:'Delhi',join:'2015-12-02',email:'kavya@x.com'},
    {id:9,name:'Noah W',team:'Support',role:'Lead',status:'Active',location:'Kolkata',join:'2019-08-16',email:'noah@x.com'},
    {id:10,name:'Anu T',team:'Product',role:'Analyst',status:'Interviewing',location:'Remote',join:new Date().toISOString().slice(0,10),email:'anu@x.com'}
  ];

  private _employees$ = new BehaviorSubject<Employee[]>([...this.master]);
  employees$ = this._employees$.asObservable();

  private _showModal$ = new BehaviorSubject<boolean>(false);
  showModal$ = this._showModal$.asObservable();

  private _editing$ = new BehaviorSubject<Employee|null>(null);
  editing$ = this._editing$.asObservable();

  private nextId = 100;

  constructor(){}

  private push(){
    this._employees$.next([...this.master]);
  }

  add(emp: Partial<Employee>){
    const e: Employee = {
      id: ++this.nextId,
      name: emp.name || 'Unnamed',
      team: emp.team || 'General',
      role: emp.role || '',
      status: 'Active',
      location: emp.location || 'Remote',
      join: (emp.join) ? emp.join : (new Date().toISOString().slice(0,10)),
      email: emp.email || ''
    };
    this.master.unshift(e);
    this.push();
  }

  update(updated: Employee){
    const i = this.master.findIndex(x => x.id === updated.id);
    if(i > -1){ this.master[i] = {...updated}; this.push(); }
  }

  delete(id: number){
    this.master = this.master.filter(x => x.id !== id);
    this.push();
  }

  search(term: string){
    if(!term || term.trim()===''){ this._employees$.next([...this.master]); return; }
    term = term.toLowerCase();
    const filtered = this.master.filter(e =>
      e.name.toLowerCase().includes(term) ||
      (e.team || '').toLowerCase().includes(term) ||
      (e.role || '').toLowerCase().includes(term) ||
      (e.email || '').toLowerCase().includes(term)
    );
    this._employees$.next(filtered);
  }

  openAdd(){
    this._editing$.next(null);
    this._showModal$.next(true);
  }

  openEdit(emp: Employee){
    this._editing$.next({ ...emp });
    this._showModal$.next(true);
  }

  closeModal(){
    this._editing$.next(null);
    this._showModal$.next(false);
  }

  getById(id:number){ return this.master.find(x => x.id === id) || null; }

  joinedThisMonthCount(): number {
    const now = new Date();
    const year = now.getFullYear(), month = now.getMonth();
    return this.master.filter(e=>{
      const d = new Date(e.join);
      return d.getFullYear()===year && d.getMonth()===month;
    }).length;
  }
}
