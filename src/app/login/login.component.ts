import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: User = new User;

  constructor() { }

  ngOnInit(): void {
  }

}
