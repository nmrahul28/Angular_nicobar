import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  public data: any;
  public changeData: Subject<any> = new Subject<any>();
  public copy: any;
  public subject_obj= new Subject<any>();
  json_data = [
    { 'category': 'Dresses', 'color': 'blue', 'size': 'S', 'price': 6500, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/03/1551699507J13A6543_2plp.jpg' },
    { 'category': 'Dresses', 'color': 'ivory', 'size': 'M', 'price': 7000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/01/1548849803J13A2527_2plp.jpg' },
    { 'category': 'Dresses', 'color': 'white', 'size': 'XS', 'price': 8000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/02/1550482692J13A0451_2plp.jpg ' },
    { 'category': 'Dresses', 'color': 'red', 'size': 'L', 'price': 5800, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/03/1551672768J13A2298_2plp.jpg' },
    { 'category': 'Bottoms', 'color': 'blue', 'size': 'XS', 'price': 7000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/09/1536321788NICOBAR-04.09.187708_2plp.jpg' },
    { 'category': 'Bottoms', 'color': 'ivory', 'size': 'M', 'price': 59000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/02/1549972313J13A9086_2plp.jpg' },
    { 'category': 'Bottoms', 'color': 'white', 'size': 'L', 'price': 6500, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/02/1549972107J13A9997_2plp.jpg' },
    { 'category': 'Bottoms', 'color': 'red', 'size': ' XL', 'price': 8500, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/03/1551673530J13A6120_2plp.jpg' },
    { 'category': 'Tops', 'color': 'blue', 'size': 'S', 'price': 7000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/09/1536315149NICOBAR-04.09.188137_2plp.jpg' },
    { 'category': 'Tops', 'color': 'ivory', 'size': 'M', 'price': 9000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/01/1548911949J13A2172_2plp.jpg' },
    { 'category': 'Tops', 'color': 'white', 'size': 'L', 'price': 7300, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/10/1539347116J13A4764_2plp.jpg' },
    { 'category': 'Tops', 'color': 'red', 'size': 'XL', 'price': 6000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/03/1551671680J13A2628_2plp.jpg' },
    { 'category': 'accessories', 'color': 'blue', 'size': 'S', 'price': 8000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/09/1536936829NICOBAR-04.09.189309_1plp.jpg' },
    { 'category': 'accessories', 'color': 'ivory', 'size': 'XS', 'price': 6800, 'image': 'https://cdn.nicobar.com/500/media/images/products/2017/07/1500526156NBI004898_PIN4_Scarves__Accessories_Small_Moon_Pin_plp_Dec_2015_A46A175_2_plp.jpg' },
    { 'category': 'accessories', 'color': 'white', 'size': 'M', 'price': 9000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2017/07/1500526198NBI004899_PIN5_Scarves__Accessories_Big_Heart_Pin_plp_Dec_2015_A46A134_2_plp.jpg' },
    { 'category': 'accessories', 'color': 'red', 'size': 'L', 'price': 8000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2019/01/1547791531J13A2239_2plp.jpg' },
    { 'category': 'nicocore', 'color': 'blue', 'size': 'XS', 'price': 5000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/10/1538743429J13A9507_2plp.jpg' },
    { 'category': 'nicocore', 'color': 'ivory', 'size': 'M', 'price': 7500, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/09/1537871224IMG_3480_2plp.jpg' },
    { 'category': 'nicocore', 'color': 'white', 'size': 'L', 'price': 8500, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/10/1538743325J13A9560_2plp.jpg' },
    { 'category': 'nicocore', 'color': 'red', 'size': 'S', 'price': 9000, 'image': 'https://cdn.nicobar.com/500/media/images/products/2018/09/1536912309IMG_1915_2plp.jpg' },

  ]

  constructor() {
    this.copy = [...this.json_data];
  }
  add(get_obj) {
    this.copy = this.json_data;
    this.copy = this.copy.filter((ele:any) => {
      if ((get_obj.category ? ele.category == get_obj.category : true) && (get_obj.color ? ele.color == get_obj.color : true)
        && (get_obj.price ? ele.price == get_obj.price : true) && (get_obj.size ? ele.size == get_obj.size : true)) {
        return true;
      }
      return false;
    });
    this.subject_obj.next(this.copy);
  }
  send_data() {
    return this.copy;

  }

}
