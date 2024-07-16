import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GastronomiaComponent } from './components/gastronomia/gastronomia.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'gastronomia', component: GastronomiaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'form', component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
