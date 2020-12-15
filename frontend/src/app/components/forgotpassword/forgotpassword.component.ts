import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  datauser={
    email:''
  }

  ngOnInit(): void {
  }

  forgetPassword(){
    this.authService.forgetPassword(this.datauser)
    .subscribe(
      res =>{
        console.log(res)
        res=>alert('chek your email')
      }
    )
  }

}
