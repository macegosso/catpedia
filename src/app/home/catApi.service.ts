import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { catModel, gatos } from './cat.model';

@Injectable({
  providedIn: 'root'
})
export class catApiService {
  url: string = 'https://api.thecatapi.com/v1'

  key = {headers: new HttpHeaders({
    'x-api-key':'131c9801-f492-472a-914e-1829c2ae5193'
  })}

  constructor(private cliente: HttpClient) { }

  
  getCat():Observable<gatos[]> {
    return this.cliente.get<gatos[]>(
      this.url + '/images/search?has_breeds=1&limit=16', this.key
    ).pipe(retry(1), 
    catchError(this.fail))
  }
  fail(error: HttpErrorResponse){
    console.log(error)
    return throwError(error)
  }

  getCatById(id: string):Observable<catModel>{
    return this.cliente.get<catModel>(
      this.url + `/images/${id}`,this.key
    ).pipe(retry(1),
    catchError(this.fail))
  }

  favAdd(catFavId: string):Observable<string>{
    return this.cliente.post<string>(this.url+`/favourites`, {image_id: catFavId, sub_id: 'FakeID'},this.key)
  }

  pullFavCats():Observable<gatos[]>{
    return this.cliente.get<gatos[]>(
      this.url + '/favourites?sub_id=FakeID', this.key
    )
  }

  delFav(idDel: number):Observable<void>{
    return this.cliente.delete<void>(
      this.url + `/favourites/${idDel}`,this.key
    )
  }
  }
