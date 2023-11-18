import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.initializeForm()
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      password:['',[Validators.required]]
    })
  }
}
