import { Component } from '@angular/core';
/**
 * this class is component who bootstrap application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * this property is an exemple for interpolation in html
   */
  public title = 'formation-angular-atos-juin';
}
