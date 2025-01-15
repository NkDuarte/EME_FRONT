import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: 'oauth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/oauth/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OauthRoutingModule {}
