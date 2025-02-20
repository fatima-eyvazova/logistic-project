import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TrackingComponent {
  trackingType: string = '1';
  wagonNo: string = '';
  inputPlaceholder: string = 'Enter Wagon №';

  updatePlaceholder(): void {
    switch (this.trackingType) {
      case '1':
        this.inputPlaceholder = 'Enter Wagon №';
        break;
      case '2':
        this.inputPlaceholder = 'Enter Container №';
        break;
      case '3':
        this.inputPlaceholder = 'Enter Booking №';
        break;
      default:
        this.inputPlaceholder = '';
    }
  }
}
