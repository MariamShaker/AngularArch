import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { HomeComponent } from './feature/home/home.component';
import { ProductsComponent } from './feature/products/products.component';
import { RegisterComponent } from './feature/auth/register/register.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent,canActivate:[authGuard]},
    {path:'',component:LayoutComponent,children:[
         {path:'home',component:HomeComponent,canActivate:[authGuard]},
         {path:'products',component:ProductsComponent,canActivate:[authGuard]},
    ]}

];
