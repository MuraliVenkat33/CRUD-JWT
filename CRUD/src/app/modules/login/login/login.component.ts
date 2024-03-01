import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  auth: any = {
    username: "",
    password: ""
  }

  constructor(private http: HttpClient,private router: Router){
    localStorage.clear()
  }

  onSubmit() {
    // Handle login logic here
    console.log('Login Successful!', this.auth);
    this.http.post('https://dummyjson.com/auth/login', this.auth).subscribe((res: any) => {
      alert('Login Success');
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/home')
    },err => {
      console.log(err);
      if(err.status === 400){
          alert(err.error.message);
      }
    })
  }
  login(){
   
  }

}
