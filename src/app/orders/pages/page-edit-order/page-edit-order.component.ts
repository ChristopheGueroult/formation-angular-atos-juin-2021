import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$!: Observable<Order>;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item$ = this.ordersService.getItemById(id);
  }

  ngOnInit(): void {}

  public action(item: Order): void {
    this.ordersService.update(item).subscribe((res) => {
      // gerer code error
      this.router.navigate(['orders']);
    });
  }
}
