import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // set collection
  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // change  state item

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id in collection
}
