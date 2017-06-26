import { DatePipe } from '@angular/common';
export class Delivery {
    dv_id: string;
    donee_name: string;
    contractor: string;
    delivery_dt: string;
    item_name: string;
    item_unit: string;
    item_qt: Number;
    expire_dt: string;
    memo: string;

    constructor() {
        this.item_qt = 0;
    }

    public checkInput() {
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(ob: any = undefined) {
        // TODO : 確認 id 與 date 格式如何處理
        if (ob === undefined) ob = this;
        let object = {
            dv_id: ob.dv_id,
            donee_name: ob.donee_name,
            contractor: ob.contractor,
            delivery_dt: Date.parse(ob.delivery_dt),
            item_name: ob.item_name,
            item_unit: ob.item_unit,
            item_qt: ob.item_qt,
            expire_dt: Date.parse(ob.expire_dt),
            memo: ob.memo
        };
        // console.log(object);
        return object;
    }

    pushData(ob) {
        this.dv_id = ob.dv_id;
        this.donee_name = ob.donee_name;
        this.contractor = ob.contractor;
        this.delivery_dt = new DatePipe('zh-tw').transform(ob.delivery_dt, 'yyyy/MM/dd');
        this.item_name = ob.item_name;
        this.item_unit = ob.item_unit;
        this.item_qt = ob.item_qt;
        this.expire_dt = new DatePipe('zh-tw').transform(ob.expire_dt, 'yyyy/MM/dd');
        this.memo = ob.memo;
    }
}

export let Category = ['', '營養品', '沖泡品', '主食類', '罐頭', '生活用品', '零食', '調味品', '飲料', '生鮮食品', '其他'];
export let CategorySearch = ['', '品項名稱', '過期日', '品項類別'];
export let CategoryKey = ['', 'item_name', 'expire_dt', 'category'];

