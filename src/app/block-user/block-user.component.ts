import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlockService } from '../block.service';
import { User } from '../User';
import{introAnimation} from '../animations';

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
  message='';

  constructor(private blockService:BlockService) { }

  ngOnInit() {
    
  }


  onBlock(userId,mobileNo){
    
   if(userId.value && mobileNo.value){
    this.isProcessing=true;
    this.hasError=false;
    this.hasMessage=false;
    let user=new User(userId.value,mobileNo.value,'');
    this.blockService.blockUser(user).subscribe(data=>{
      this.isProcessing=false;
      this.hasMessage=true;
      if(data.status=='success'){
        
        this.message=data.status+"\n"+data.desc;
      }else{
        this.message=data;
      }
    }, error => {
      console.log('oops', error);
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
