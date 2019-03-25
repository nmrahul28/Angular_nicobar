import { Component, OnInit } from '@angular/core';
import{ DataserviceService } from '../dataservice.service'
@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  public products=[];
   public items=[];
 constructor(private myservice1:DataserviceService) { 
    this.items=myservice1.send_data();
    myservice1.subject_obj.subscribe(res=>{
      this.items=res;
      console.log(res);
    });  
  }

  ngOnInit() {
  }

}
