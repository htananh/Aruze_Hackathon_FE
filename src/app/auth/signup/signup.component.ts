import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Input() changeIslogin:any;
  myform: FormGroup;
  constructor(private router:Router, private fb:FormBuilder) {
      this.myform = fb.group({
          fullname:['', Validators.required],
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required,  Validators.minLength(5)]],
      })
    }
    submitForm(){
      if(this.myform.valid){
        console.log(this.myform.value);
        
      }
    }
}
