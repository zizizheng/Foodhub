import { PosSystemService } from '../service/pos-system.service';
import { Component, Injector, Input } from '@angular/core';

declare const swal: any;

export class AddTemplateComponent {
    @Input() protected postSystemService: PosSystemService;

    constructor(injector: Injector) {
        this.postSystemService = injector.get(PosSystemService);
    }

    Add(url, urlParam, showMsg = true) {
        this.postSystemService.postData(url, urlParam).subscribe(
            data => {
                swal('Congrations', data.success, 'success');
            },
            error => {
                const err = error.json();
                swal('Oops!', err.error, 'warning');
            }
        );
    }

    GetSpecificData(url) {
        const that = this;
        return new Promise(function (resolve, reject) {
            that.postSystemService.getSpecificData(url).subscribe(
                data => resolve(data),
                error => reject(error),
            );
        });
    }
}
