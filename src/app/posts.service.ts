import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getposts(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts").pipe(map((res:any)=> res))
  }
}
