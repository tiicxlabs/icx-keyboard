import { Component } from '@angular/core';
import { TestAppComponent } from './test-app/test-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TestAppComponent]
})
export class AppComponent {
  title = 'icx-keyboard';
}
