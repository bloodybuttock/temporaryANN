import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../../components/signup/signup.component';
import { SignComponent } from '../../components/sign/sign.component';
import { ForgotpasswordComponent } from '../../components/forgotpassword/forgotpassword.component';
import { NotifregisterComponent } from '../../components/notifregister/notifregister.component';
import { AuthGuard } from '../../services/auth/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:SignComponent,
    // canActivate:[AuthGuard],
    // Role:['Admin']
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'forgot',
    component:ForgotpasswordComponent
  },
  {
    path:'notif', component:NotifregisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
