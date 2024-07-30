import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ViewComponent } from './admin/components/view/view.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { HomeComponent } from './admin/components/home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

export const routes: Routes = [
  {path:"auth",component:AuthComponent,
  children:[
    {
      path:"",component:LoginComponent
    },
    {
      path:"signup",component:SignupComponent
    }

  ]
},
    {path:"admin",component:AdminComponent,
    children:[
        {path:"",component:HomeComponent},
        {path:"view",component:ViewComponent},
        {path:"successor",component:RegisterComponent}
    ]
},

    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},


     {path:"**",redirectTo:"auth"}
];
