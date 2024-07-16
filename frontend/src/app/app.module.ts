import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importa HttpClientModule y las funciones necesarias

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GastronomiaComponent } from './components/gastronomia/gastronomia.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component'; 
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HistoriaComponent,
    GastronomiaComponent,
    LoginComponent,
    FormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
