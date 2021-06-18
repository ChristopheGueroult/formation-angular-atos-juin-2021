import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  // refresh collection
  public refreshCollection(): void {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  // get collection
  public get collection(): Subject<Order[]> {
    return this.collection$;
  }

  // set collection
  // public set collection(col: Subject<Order[]>) {
  //   this.collection$ = col;
  // }

  // change  state item
  public changeState(item: Order, state: StateOrder): Observable<any> {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap((data) => {
        // code error de l'api on les gere ici
        // si ok
        this.refreshCollection();
      })
    );
  }

  // add item in collection
  public add(item: Order): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/orders`, item).pipe(
      tap((data) => {
        // code error de l'api on les gere ici
        // si ok
        this.refreshCollection();
      })
    );
  }

  // delete item in collection
  public delete(item: Order): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/orders/${item.id}`).pipe(
      tap((data) => {
        // code error de l'api on les gere ici
        // si ok
        this.refreshCollection();
      })
    );
  }

  // get item by id in collection
  public getItemById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/orders/${id}`);
  }
}
