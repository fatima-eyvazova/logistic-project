import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterModule } from './pages/register/register.module';
import { SinglepageModule } from './pages/singlepage/singlepage.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    SinglepageModule,
    RegisterModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'logistic-dashboard';
}
