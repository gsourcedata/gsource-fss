import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

export interface PeriodicElement {
  name: string;
  email: string;
  roles: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userData:any=[]
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  displayedColumns: string[] = [ 'Name', 'Email', 'Role'];
  dataSource: any  
  constructor(private auth: AuthenticationService, private router: Router, private _fileService:UsersService) {}

  ngOnInit() { 
    this._fileService.getAll().subscribe(data=>{
     
      console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', ELEMENT_DATA)
      this.userData = data
      this.dataSource = this.userData
      console.log('allllllllll user data', this.userData)
      this.userData.forEach(element => {
      

          console.log('elememememememem', element)
      });
    })
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });


  }




}