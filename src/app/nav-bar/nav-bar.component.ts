import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor(private router:Router) { }

  @Input('') navType:string;
  @Input('') activeLink:string;

  ngOnInit() {
  }

  ngAfterViewInit() {
    try{
      (document.querySelector('.'+this.activeLink)).classList.add("active");
      //make the navBar fixed-top or scrolling as required  
    (document.querySelector('.navbar') as HTMLElement).classList.add(this.navType);
    //also highlight any [id] with the [activeLink]
    document.querySelector("#"+this.activeLink).classList.add("active");
    }catch{

    }
     
}

  navigate(url:string){
    this.router.navigateByUrl('/'+url);
  }

}
