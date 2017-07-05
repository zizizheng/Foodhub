import { UpdateTemplateComponent } from './../../../template/update-template.component';
import { Component, OnInit, Injector, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../../service/server.service';
import { User } from '../user.model';
import * as itemCat from '../user.model';

declare let swal: any;


@Component({
    selector: 'update-user',
    templateUrl: `./update-user.component.html`,
    styleUrls: ['./../../../template/update-template.component.css']
})
export class UpdateUserComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    user: User;
    area = itemCat.Area;
    auth = itemCat.Auth;
    nameChange = false;
    primaryKey = itemCat.PrimaryKey;
    curName = '';

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.user = new User();
    }

    ngOnInit() {
        this.user.pushData(this.inputItem);
        this.curName = this.user[this.primaryKey];
        // console.log(this.user);
    }

    ngOnChanges() {
        this.user.pushData(this.inputItem);
        this.curName = this.user[this.primaryKey];
    }

    onSumbit() {
        let itemObject = this.user.getObject();
        let url = this.serverService.getUserUrl(this.user[this.primaryKey]);
        if (this.nameChange === true) {
            this.nameChange = false;
            const that = this;
            swal({
                title: '你將要更改使用者帳戶!!！',
                text: '舊有使用者資料將被刪除',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定更改'
            }).then(function () {
                let delUrl = that.serverService.getUserUrl(that.curName);
                that.Update(url, itemObject, true, delUrl).then(
                    (data) => {
                        if (data) {
                            that.updated.emit(true);
                        }
                    }
                );
            })
        }
        else {
            this.Update(url, itemObject).then(
                (data) => {
                    if (data) {
                        this.updated.emit(true);
                    }
                }
            );
        }
    }

    clearClick() {
        this.updated.emit(false);
    }

}
