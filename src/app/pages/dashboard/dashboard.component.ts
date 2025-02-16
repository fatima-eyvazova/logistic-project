import { Component } from '@angular/core';
import { BalanceComponent } from '../../components/dashboard/balance/balance.component';
import { DashboardTableComponent } from '../../components/dashboard/dashboard-table/dashboard-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [BalanceComponent, DashboardTableComponent],
})
export class DashboardComponent {}
