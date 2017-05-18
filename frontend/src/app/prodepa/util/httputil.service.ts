import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUtilService {
    
    private http: Http;
    private headers: Headers;
    private options: RequestOptionsArgs;
    private baseUrl: string = 'http://dev.www2.desenvolver.prodepa.gov.br:8080/exampleapp/api';
    
    constructor(http: Http){
        this.http = http;
        
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     
        this.options = new RequestOptions();
        this.options.headers = this.headers;
        this.options.withCredentials = true;
    }
    
    post(resource: string, payload): Observable<Response> {
        return this.http.post(this.baseUrl + resource, payload, this.options);
    }

    get(resource: string): Observable<Response> {
        return this.http.get(this.baseUrl + resource, this.options);
    }
    
}