import { Component, OnInit } from '@angular/core';
import{User} from '../model/user.model';
import{UserService} from '../user.service';


var alert;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  user: User = new User();

  private UserError:User;
  private isCreated:boolean=false;
  private isExist:boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          console.log(data);
          this.user= new User();
          this.isCreated=true;
          this.isExist=false;
        },
        error =>{
          this.UserError=error;
          this.isCreated=false;
          if(error.status==409){
            this.isCreated=false;
            this.isExist=true;
          }
          console.log(error);
        }
        
        
        );
  };

 
}
