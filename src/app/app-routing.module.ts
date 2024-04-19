import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login', //chuyen huong toi login
    pathMatch:'full'
  },
  {
    path:'login', // 
    component: LoginComponent
  },
  {
    path:'signup', // 
    component: SignupComponent
  },
  
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'products',
        component: ProductsComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
