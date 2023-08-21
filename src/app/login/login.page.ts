import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
label : string = "login"
alertHeader:string = "loginHeader"
alertSubHeader:string = "loginsubHeader"
alertMsg:string = "loginMsg"

name:string;
  constructor() { }

  ngOnInit() {
  }

loginValidation(){
  console.log("loginValidation ---");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ("nav@gmail.com".match(validRegex)) {
    alert("Valid email address!");
    return true;
}else{
  console.log("invalid")
}
}

firstinput(ev:any){
  console.log("firstinput ------- ",ev.target.value);
}

}
