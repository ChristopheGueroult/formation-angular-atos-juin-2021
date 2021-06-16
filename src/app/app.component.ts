import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
/**
 * this class is component who bootstrap application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });

  private sub = new Subject();
  private beh = new BehaviorSubject(0);

  constructor() {
    this.obs.subscribe((data) => {
      console.log(data);
    });
    this.obs.subscribe((data) => {
      console.log(data);
    });
    this.sub.next('test');
    this.sub.next('test2');
    this.sub.subscribe((data) => {
      console.log(data);
    });
    this.sub.subscribe((data) => {
      console.log(data);
    });
    this.sub.next(Math.random());
    this.sub.subscribe((data) => {
      console.log(data);
    });

    this.beh.next(Math.random());
    this.beh.subscribe((data) => {
      console.log(data);
    });
    this.beh.subscribe((data) => {
      console.log(data);
    });
    this.beh.next(2);
  }
}
