import { Auth } from './../layout/user/user.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    public nameChange$: EventEmitter<object>;
    serverUrl: string;
    userName: string;
    auth: string;

    constructor(private http: Http) {
        this.nameChange$ = new EventEmitter<object>();
        this.serverUrl = 'http://localhost:8080/user/login/';
        this.userName = undefined;
    }

    recordLogin(name, auth): void {
        this.userName = name;
        this.auth = auth;
        this.emitChange();
        // console.log('Here is service, login name is : ' + this.userName);
    }

    checkLogin() {
        // console.log('Here is service, return name ' + this.userName);
        return this.userName;
    }

    emitChange() {
        this.nameChange$.emit({ userName: this.userName, auth: this.auth });
    }

    getData(name) {
        // console.log('login name = ' + name);
        // console.log(this.serverUrl + name);
        return this.http.get(this.serverUrl + name)
            .map(response => response.json());
    }

    postData(name, password) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const params = { 'pw': password };
        // console.log('login name = ' + name);
        // console.log(this.serverUrl + name);
        return this.http.post(this.serverUrl + name, JSON.stringify(params), options)
            .map(response => response.json());
    }
}