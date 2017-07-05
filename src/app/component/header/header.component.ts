import { LoginService } from './../../service/login.service';
import { Headers } from '@angular/http';
import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	userName: string;
	auth: string;
	isScrolled = false;
	recPos: number = 0;
	lastPos: number = 0;
	prePos: number = 0;
	Disappear = 200;
	collapse: boolean;

	constructor(public loginService: LoginService) {
		loginService.nameChange$.subscribe((object) => {
			this.userName = object.userName;
			this.auth = object.auth;
		});
		this.userName = 'Guest';
		this.auth = 'guest';
	}

	ngOnInit() {
		let com = this;
		$(window).scroll(function () {
			let st = $(this).scrollTop();
			// console.log(st);
			if (st - com.prePos < 0) {
				$('#Header').fadeIn(300);
				com.recPos = 0;
			}
			else {
				com.recPos += st - com.prePos;

				if (com.recPos > com.Disappear) {
					$('#Header').fadeOut(300);
				}
			}
			com.prePos = st;
		});
	}

}
