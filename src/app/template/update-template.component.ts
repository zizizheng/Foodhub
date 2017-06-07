import { PosSystemService } from '../service/pos-system.service';
import { Component, Injector, Input, OnInit } from '@angular/core';

declare const swal: any;

export class UpdateTemplateComponent {
    @Input() public item;
    postSystemService: PosSystemService;

    constructor(injector: Injector) {
        this.postSystemService = injector.get(PosSystemService);
    }

    // update the item and emit to parent for refreshing table
    Update(url, urlParam, delPre = false, delUrl = ''): any {
        const that = this;
        let callback;
        if (delPre) {
            callback = function (resolve, reject) {
                that.postSystemService
                    .deleteData(delUrl)
                    .subscribe(
                    data => console.log('success delete'),
                    error => {
                        const err = error.json();
                        console.log(err.error);
                        resolve(false);
                    },
                    () => {
                        that.postSystemService
                            .postData(url, urlParam)
                            .subscribe(
                            data => swal('Updating Successed', data.success, 'success'),
                            error => {
                                const err = error.json();
                                console.log(err.error);
                                resolve(false);
                            },
                            () => {
                                resolve(true);
                            });

                    }
                    );
            }
        }
        else {
            callback = function (resolve, reject) {
                that.postSystemService
                    .postData(url, urlParam)
                    .subscribe(
                    data => swal('Updating Successed', data.success, 'success'),
                    error => {
                        const err = error.json();
                        console.log(err.error);
                        resolve(false);
                    },
                    () => {
                        resolve(true);
                    }
                    );
            }
        }

        return new Promise(callback);
    }
}
