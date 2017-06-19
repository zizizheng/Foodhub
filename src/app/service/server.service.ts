import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
    private serverUrl;

    constructor() {
        this.serverUrl = 'http://localhost:8080/';
    }

    // TODO : design different function for different call

    getDonationUrl(value) {
        return this.serverUrl + 'donation/' + value;
    }

    getDoneeUrl(value) {
        return this.serverUrl + 'donee/' + value;
    }

    getDonorUrl(value) {
        return this.serverUrl + 'donor/' + value;
    }

    getUserUrl(value) {
        return this.serverUrl + 'user/' + value;
    }

    getStockBarcodeUrl(value) {
        return this.serverUrl + 'stock/barcode/' + value;
    }

    getBarcodeUrl(value) {
        return this.serverUrl + 'barcode/' + value;
    }

    getExpiryUrl(value) {
        return this.serverUrl + 'stock/expire_dt/' + value;
    }

    getStockUrl(value) {
        return this.serverUrl + 'stock/' + value;
    }

    getDeliveryUrl(value) {
        return this.serverUrl + 'delivery/' + value;
    }

}