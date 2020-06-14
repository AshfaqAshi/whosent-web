import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';
import { Message } from '../Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isProcessing=false;
  hasError=false;
  hasMessage=false;
  showInfo=false;
  message='';

  constructor(private sendService:BlockService) { }

  onSend(txtMail,txtName,txtMessage){
   // console.log("Clicked");
    if(txtMail.value && txtName.value && txtMessage.value){
      this.isProcessing=true;
      this.hasError=false;
      this.hasMessage=false;
      let msg=new Message(txtMail.value,txtName.value,txtMessage.value);
      this.sendService.sendMessage(msg).subscribe(data=>{
        this.isProcessing=false;
        //console.log(""+data);
        if(data.status=='success'){
          this.hasMessage=true;
          this.hasError=false;
        }else{
          this.hasError=true;
          this.hasMessage=false;
        }
        this.message=data.message;
      }, error => {
        console.log(error);
        this.isProcessing=false;
        this.hasError=true;
        this.message="Sorry, an error occured!";
      });
     }else{
       this.hasError=true;
       this.message='Please fill in all the fields';
     }
  }
  ngOnInit() {
  }

}
