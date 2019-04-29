import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthenticationService) {}
  title = 'gsource-fs';
  userReg = ''
  ngOnInit(){
    this.auth.profile().subscribe(user=>{
      this.userReg = user.roles
      console.log('appcomponrt Userrrrrrrrrrrr111', this.userReg)
    })
  }



}
