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
  constructor(private blockService:BlockService) { }

  ngOnInit() {
    
  }


  onBlock(userId,mobileNo){
    
    this.isProcessing=true;
    let user=new User(userId.value,mobileNo.value,'');
    this.blockService.blockUser(user).subscribe(data=>{
      alert(data);
      this.isProcessing=false;
    }, error => console.log('oops', error));
  }

}
