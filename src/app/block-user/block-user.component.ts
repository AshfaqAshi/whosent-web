import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlockService } from '../block.service';
import { User } from '../User';
import{introAnimation} from '../animations';
import * as infoData from '../infoData.json';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css'],
  animations:introAnimation
})
export class BlockUserComponent implements OnInit {
  public isProcessing=false;
  hasError=false;
  hasMessage=false;
  showInfo=false;
  message='';
  infoMessage=infoData.info["whosent-block-help"];

  constructor(private blockService:BlockService) { }

  ngOnInit() {
    
  }


  onBlock(userId,mobileNo,reason){
   if(userId.value && mobileNo.value && reason.value){
    this.isProcessing=true;
    this.hasError=false;
    this.hasMessage=false;
    let user=new User(userId.value,mobileNo.value,reason.value);
    this.blockService.blockUser(user).subscribe(data=>{
      this.isProcessing=false;
      
      if(data.status=='success'){
        this.hasMessage=true;
        this.hasError=false;
      }else{
        this.hasError=true;
        this.hasMessage=false;
      }
      this.message=data.message;
    }, error => {
      this.isProcessing=false;
      this.hasError=true;
      this.message="Sorry, an error occured!";
    });
   }else{
     this.hasError=true;
     this.message='Please fill in all the fields';
   }
  }



}
