import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AccountsService } from "../accounts.service";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends BaseActions implements OnInit {
  loginForm: any;
  loading: boolean = false;
  isMatched: boolean = true;
  innerHeight: number = 600;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountsService
  ) {
    super();
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
    // this.initForm();
    this.innerHeight = window.innerHeight - 50;
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log("login form value: ", this.loginForm.value);
    this.loading = true;
    this.service.Login(this.loginForm.value).subscribe(
      (resp) => {
        console.log("resp: ", resp);
        this.localStorageSet(resp);
        this.isMatched = true;
      },
      (err) => {
        this.isMatched = false;
        console.log("custom err message: ", err.error.message);
        if (err.error.message) this.WarningPopup(err.error.message);
        else this.WarningPopup(err.message);
      }
    );
  }

  localStorageSet(respData) {
    let userObjectWithoutPass = {
      userName: respData.userName,
      email: respData.email,
      role: respData.role,
      id: respData._id,
    };
    localStorage.setItem("uid", respData._id);
    localStorage.setItem("user", JSON.stringify(userObjectWithoutPass));
    this.router.navigate(["/admin"]);
  }
}
