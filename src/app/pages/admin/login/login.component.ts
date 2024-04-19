import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginOj: any = {
    userName:'',
    password:'',

  }



  constructor(private router : Router){}
  onLogin(){
    if(this.loginOj.userName == "admin" && this.loginOj.password == '123456'){
      this.router.navigateByUrl('/products')

    }else{
      alert('Thông tin đăng nhập sai')
    }
  }
  


}
