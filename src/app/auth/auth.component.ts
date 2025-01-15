import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  
  template: `
    <div class="container-fluid vh-100">
    <div class="row justify-content-center h-100">
        <div class="col-md-7 bg-image-login align-self-center">
        </div>
        <div class="col-md-5 align-self-center">
          <h1>
            <strong>
              Bienvenido a EME Products
            </strong>
          </h1>
          <router-outlet></router-outlet>
        </div>
    </div>
  </div>
  `,
  styles: ``
})
export class AuthComponent {

}
