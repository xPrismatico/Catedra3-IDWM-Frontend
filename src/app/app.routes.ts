import { Routes } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => import('./catedra3/pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        pathMatch: 'full',
        loadComponent: () => import('./catedra3/pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'posts',
        pathMatch: 'full',
        loadComponent: () => import('./catedra3/pages/posts/posts.component').then(m => m.PostsComponent),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
