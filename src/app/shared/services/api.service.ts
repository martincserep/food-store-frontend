import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiBaseUrl = 'http://localhost:3000/'; // local

    get(url: string, params: any = {}): Observable<any> {
        return this.httpClient.get<any>([this.apiBaseUrl, url].join(''), {
            params
        });
    }
    constructor(
        private httpClient: HttpClient
    ) { }

}