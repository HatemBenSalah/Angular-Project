import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { UserSettingComponent } from './profil/user-setting/user-setting.component';
import { TokenInterceptor } from './Token/TokenInterceptor';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { EmployeeboardComponent } from './employeeboard/employeeboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent,
    HomeComponent,
    AdminboardComponent,
    EmployeeboardComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
