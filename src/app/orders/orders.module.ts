import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { FormOrderComponent } from './components/form-order/form-order.component';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    FormOrderComponent,
  ],
  providers: [],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
