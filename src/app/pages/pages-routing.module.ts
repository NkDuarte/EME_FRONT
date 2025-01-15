import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { oauthGuard } from '../guards/guards.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [ oauthGuard ],
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
