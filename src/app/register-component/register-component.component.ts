import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  user!:User;
  constructor() { }

  ngOnInit(){
    this.clearForm()
  }

  saveDetails(event:any)
  {
   console.warn(event)
  }
  clearForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.reset();
    this.user = {
      Name:'',Email: '', Password: '', Invoice:['']
    }
    }
    

  }

}
