import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Job } from './model/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  
  private userUrl:string = 'http://localhost:8080/';
  public Register_API = this.userUrl + '/all';

  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }
  public getJobs(): Observable<any> {
    return this.http.get('http://localhost:8080/demo/jobs');
  }
}
