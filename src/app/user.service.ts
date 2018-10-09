import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { Request } from 'selenium-webdriver/http';
import { Options } from 'selenium-webdriver/safari';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl:string = 'http://localhost:8080';
  public Register_API = this.userUrl + '/createUser';


  private headers = new Headers({'Content-Type':'application/json'});
  
  
  constructor(private http: HttpClient) { }
  public createUser(user) {
    return this.http.post<User>(this.Register_API,user);
  }

  /*public getUser(id :number ): Observable<any> {
    return this.http.get('//localhost:8080/demo/'+id);
  }

  public getAll(): Observable<any> {

    return this.http.get('//localhost:8080/all');

  }*/
}

  