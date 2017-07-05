import { Auth } from './../layout/user/user.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerService } from './server.service';

@Injectable()
export class LoginService {
    public nameChange$: EventEmitter<object>;
    userName: string;
    auth: string;

    constructor(private http: Http,
        private serverService: ServerService) {
        this.nameChange$ = new EventEmitter<object>();
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
        let url = this.serverService.getLoginUrl(name);
        return this.http.get(url)
            .map(response => response.json());
    }

    postData(name, password) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const params = { 'pw': password };
        let url = this.serverService.getLoginUrl(name);
        // console.log('login name = ' + name);
        // console.log(this.serverUrl + name);
        return this.http.post(url, JSON.stringify(params), options)
            .map(response => response.json());
    }
}