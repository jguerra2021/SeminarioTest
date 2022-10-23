import { AuthService } from './services/auth.service';
import { Data } from './models/data';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'UMG GRUPO 3';
  subTitle = 'PRUEBA DE COMPONENTES'
  contentEmoji = ''
  
  form: FormGroup = new FormGroup({})
  isCheck: any;
  

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })


  }

  sendLogin(): void {
   this.isCheck= {user:1}
  }
}
