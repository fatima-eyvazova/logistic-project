import { Component } from '@angular/core';
import { BalanceComponent } from '../../components/dashboard/balance/balance.component';
import { DashboardTableComponent } from '../../components/dashboard/dashboard-table/dashboard-table.component';
import { DashboardHeaderComponent } from '../../components/dashboard/dashboard-header/dashboard-header.component';
import { TransactionHistoryComponent } from '../../components/dashboard/transaction-history/transaction-history.component';
import { DashboardChartComponent } from '../../components/dashboard/dashboard-chart/dashboard-chart.component';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    BalanceComponent,
    DashboardTableComponent,
    DashboardHeaderComponent,
    TransactionHistoryComponent,
    DashboardChartComponent,
  ],
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
