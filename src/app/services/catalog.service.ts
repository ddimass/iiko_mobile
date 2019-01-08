import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Org } from '../classes/org';
import { Observable, of } from 'rxjs';
import { Group, Product } from '../classes/product';
import { environment } from '../../environments/environment';
import { Recycler } from '../classes/recycler';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  token = '';
  orgs: Org[] = [];
  loaded = false;
  groups: Group[] = [];
  menu_rev: number = 0; //TODO Загрузить ревизию из локального репозитория для проверки актуальности меню
  products: Product[]=[]; //TODO загрузка из локального репозитория 
  recycler: Recycler[]=[]; //TODO загрузка из локального репозитория
  

  constructor(private http: HttpClient) { }
  iikoGetnomenclature() {
    let url = environment.apiUrl + 'iiko/getmenu/';
    this.http.get<any>(url).subscribe(resp => {this.products = resp['products']; this.groups = resp['groups']; this.loaded = true;});
  }
  orgSelect(orgs: Org[]) {
    let org: Org;
    
    return org;
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  public addtorecycler(prod: Product) {

    let recy = new Recycler;
    recy.product = prod;
    recy.count = 1;
    let index = this.recycler.findIndex(i => i.product.id == prod.id)
    if (index == -1) {
      this.recycler.push(recy);
    } else {
    this.recycler[index].count++;
    }
    console.log(this.recycler);

  }
}
