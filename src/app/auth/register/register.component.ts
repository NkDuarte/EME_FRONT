import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public form_register!: FormGroup
  public load_form: boolean = false
  public hide: boolean = true
  public success: boolean = false
  private User!: User

  constructor(
    private api_service: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private ng_zone: NgZone,
  ) {

  }

  ngOnInit(): void {
    this.loadFormRegister()
  }

  loadFormRegister() {
    this.form_register = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  setDataRegister() {
    this.load_form = true
    this.api_service.registerUser(this.form_register.value).subscribe(
      ({token, user_data}) => {
        this.load_form = false
        this.success = true
        localStorage.setItem('Authorization', token)
        this.User = new User(user_data.id, user_data.name, user_data.email)
        this.ng_zone.run( () => {
          this.router.navigateByUrl('/dashboard/home')
        } )
      }
    )
  }

}
