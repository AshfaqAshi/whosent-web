import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  @Input('') message:string;
  ngOnInit() {
   
  }





}
