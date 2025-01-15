import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public form_login!: FormGroup
  public load_form: boolean = false
  public hide: boolean = true

  private User!: User

  constructor(
    private api_service: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private ng_zone: NgZone,
  ) {

  }

  ngOnInit(): void {
    this.loadFormLogin()
  }

  //? -> Mappeo del formulario
  loadFormLogin() {
    this.form_login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  //? -> Envio de informacion
  setDataLogin() {
    this.load_form = true
    this.api_service.loginUser(this.form_login.value).subscribe(
      ({ token, user }: any) => {
        this.load_form = false
        localStorage.setItem('Authorization', token)
        this.User = new User(user.id, user.name, user.email)
        this.ng_zone.run(() => {
          this.router.navigateByUrl('/dashboard/home')
        })
      }
    )
  }

}
