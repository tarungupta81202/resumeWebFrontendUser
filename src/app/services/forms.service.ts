import { Injectable } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class FormsService {
  loginForm!: UntypedFormGroup;
  signpForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]],
    });

    this.signpForm = this.formBuilder.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      fullName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
}
