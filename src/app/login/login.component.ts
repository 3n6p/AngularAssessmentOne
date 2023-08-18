import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  loginform!:FormGroup;

  constructor(private formBuider: FormBuilder, private router:Router,private http:HttpClient){}

  ngOnInit(): void {
    
    this.loginform =this.formBuider.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{

      // matching email & Password 
     const user = res.find((a:any)=>{
      return a.email === this.loginform.value && a.password === this.loginform.value.password
     })
     
     // consdition for Login 
     if(user){
      alert("successfully logged in ")
      this.loginform.reset();
      this.router.navigate(['/student'])

     }else{
      alert('User not found with this credentials ')
     }
    },
    err=>{
      alert("something went wrong")
    }
    )
  }
}
