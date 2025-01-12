import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthRoutingModule } from './auth/oauth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/oauth/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OauthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
