import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // ex behavior juste pour l'ex de unsubscribe
  private test = new BehaviorSubject(0);
  // ex fot unsubscribe
  private sub!: Subscription;
  public myTitle = 'List Orders';
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {
    // ex de subscribe to behavior test just for unsubscribe ex
    this.sub = this.test.subscribe((data) => console.log(data));
  }

  public changeTitle(): void {
    this.myTitle = 'My List Orders';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
