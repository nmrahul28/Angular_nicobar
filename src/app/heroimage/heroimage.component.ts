import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroimage',
  templateUrl: './heroimage.component.html',
  styleUrls: ['./heroimage.component.css']
})
export class HeroimageComponent implements OnInit {
  url="https://cdn.nicobar.com/1500/media/categories/1551800989desktop-women.jpg";
  constructor() { }

  ngOnInit() {
  }

}
