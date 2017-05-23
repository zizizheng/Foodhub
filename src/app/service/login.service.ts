import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    public nameChange$: EventEmitter<string>;
    serverUrl: string;
    loginName: string;
    auth: string;

    constructor(private http: Http) {
        this.nameChange$ = new EventEmitter<string>();
        this.serverUrl = 'http://localhost:8080/user/login/';
        this.loginName = undefined;
    }

    recordLogin(name): void {
        this.loginName = name;
        this.emitChange();
        // console.log('Here is service, login name is : ' + this.loginName);
    }

    checkLogin() {
        // console.log('Here is service, return name ' + this.loginName);
        return this.loginName;
    }

    emitChange() {
        this.nameChange$.emit(this.loginName);
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