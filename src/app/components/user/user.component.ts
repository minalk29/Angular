import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/utility/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']    
})
export class UserComponent implements OnInit {
users:any;
  constructor(private _userServ:UserService) { }

  ngOnInit(): void {
    this._userServ.getUsers().subscribe((u)=>{
      this.users=u;
      //console.log(u.data);
    });

    
  }
  click(){
    this._userServ.addUser().subscribe((u)=>{
      this.users=u;
    })
  }
}
