import { LoginService } from './../../service/login.service';
import { ServerService } from './../../service/server.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const swal: any;

@Component({
	selector: 'login-page',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	curTime: Object;
	account: string = '';
	password: string = '';
	userName: string;
	pack: any;
	isLogin: boolean;

	constructor(private router: Router,
		public loginService: LoginService) {
		this.isLogin = false;
		this.pack = undefined;
		this.userName = undefined;
	}

	ngOnInit() {
		this.userName = this.loginService.checkLogin();
		this.isLogin = (this.userName === undefined) ? false : true;
	}

	onSubmit(v) {
		// swal("Account : " + this.account + ", and Password : " + this.password);
		if (v.account === '' || v.password === '')
			swal('請輸入帳號密碼', '忘記帳密了嗎? 這功能也還沒實作QQ', 'warning');
		else {
			this.loginService.postData(v.account, v.password)
				.subscribe(
				data => this.pack = data,
				error => {
					swal('Error', error.JSON);
				},
				() => {
					console.log(this.pack);
					this.loginService.recordLogin(v.account);
					swal('Login Successed', 'Welcome to FoodBank, ' + this.account);
					this.router.navigate(['page-expiry']);
				}
				);
		}
	}

	onLogout() {
		this.loginService.recordLogin(undefined);
		this.isLogin = false;
	}
}
