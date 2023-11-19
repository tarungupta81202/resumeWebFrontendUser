import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  loginForm!: UntypedFormGroup;

  constructor(private formBuilder:UntypedFormBuilder) {}

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      password:['',[Validators.required]]
    })
  }
}
