import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
  providers: [CurrencyPipe],
})
export class TransactionHistoryComponent {
  transactions = [
    { date: '17.02.2025', income: 0, expenses: 0 },
    { date: '16.02.2025', income: 0, expenses: 0 },
  ];

  getTransactionClass(transaction: any): string {
    return transaction.amount < 0 ? 'negative' : 'positive';
  }
}
