import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  flag_category: boolean = true;
  flag_price: boolean = true;
  flag_size: boolean = true;
  flag_color: boolean = true;
  myservice = new DataserviceService();

  filterData={
    category:"",
    color:"",
    size:""
  }

  new_data = { 'category': '', 'color': '', 'size': '', 'price': '' };
  constructor() { }

  ngOnInit() {
  }
  show_hide_categories() {
    if (this.flag_category == true) {
      document.getElementById('categories').style.display = 'block';
      this.flag_category = false;
    }
    else {
      document.getElementById('categories').style.display = 'none';
      this.flag_category = true;
    }
  }
  show_hide_price() {
    if (this.flag_price == true) {
      document.getElementById('Price').style.display = 'block';
      this.flag_price = false;
    }
    else {
      document.getElementById('Price').style.display = 'none';
      this.flag_price = true;
    }
  }
  show_hide_size() {
    if (this.flag_size == true) {
      document.getElementById('Size').style.display = 'block';
      this.flag_size = false;
    }
    else {
      document.getElementById('Size').style.display = 'none';
      this.flag_size = true;
    }
  }
  show_hide_color() {
    if (this.flag_color == true) {
      document.getElementById('Color').style.display = 'block';
      this.flag_color = false;
    }
    else {
      document.getElementById('Color').style.display = 'none';
      this.flag_color = true;
    }
  }

  get_item(key, value) {
      this.filterData[key] = value;
      console.log(key,value);
      this.myservice.add(this.filterData);
  }
}