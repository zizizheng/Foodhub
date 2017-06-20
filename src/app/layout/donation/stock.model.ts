import { DatePipe } from '@angular/common';
export class Stock {
    dn_id: string;
    item_name: string;
    item_unit: string;
    item_unitprice: Number;
    item_qt: Number;
    category: string;
    expire_dt: string;
    donor_name: string;

    constructor() {
        this.item_qt = 0;
        this.item_unitprice = 0;
    }

    public checkInput() {
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject() {
        // TODO : 確認 id 與 date 格式如何處理
        let object = {
            dn_id: this.dn_id,
            item_name: this.item_name,
            item_unit: this.item_unit,
            item_qt: this.item_qt,
            category: this.category,
            expire_dt: Date.parse(this.expire_dt),
            donor_name: this.donor_name
        };
        // console.log(object);
        return object;
    }

    pushData(ob) {
        this.dn_id = ob.dn_id;
        this.item_name = ob.item_name;
        this.item_unit = ob.item_unit;
        this.item_unitprice = ob.item_unitprice;
        this.item_qt = ob.item_qt;
        this.category = ob.category;
        this.expire_dt = new DatePipe('zh-tw').transform(ob.expire_dt, 'yyyy/MM/dd');
        this.donor_name = ob.donor_name;
    }
}

export let Category = ['', '營養品', '沖泡品', '主食類', '罐頭', '生活用品', '零食', '調味品', '飲料', '生鮮食品', '其他'];
export let CategorySearch = ['', '品項名稱', '過期日', '品項類別'];
export let CategoryKey = ['', 'item_name', 'expire_dt', 'category'];

