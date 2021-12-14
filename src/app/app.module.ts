import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { RouterModule } from '@angular/router';
import { NavigateComponentComponent } from './navigate-component/navigate-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MystorageComponentComponent } from './mystorage-component/mystorage-component.component';
import { CreateStorageComponentComponent } from './create-storage-component/create-storage-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    NavigateComponentComponent,
    FooterComponentComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    MystorageComponentComponent,
    CreateStorageComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'home', component:HomeComponentComponent},{path:'about', component:AboutComponentComponent},{path:'login', component:LoginComponentComponent},{path:'register', component:RegisterComponentComponent},{path:'mystorage',component:MystorageComponentComponent}, {path:'store', component:CreateStorageComponentComponent},{path: '',   redirectTo: 'home', pathMatch: 'full'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
