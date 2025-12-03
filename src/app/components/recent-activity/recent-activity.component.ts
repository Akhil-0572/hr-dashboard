import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent {
  items = [
    'Maria joined Sales team',
    'Payroll run completed',
    '3 performance reviews due',
    'New policy document uploaded',
    'Interview scheduled with Anu (Dec 5)',
    'Salary revision processed for 22 employees'
  ];
}
