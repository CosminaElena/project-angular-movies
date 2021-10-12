import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingModule } from './routing.module';
import { ParentGuard } from './guards/parent.guard';
import { ChildGuard } from './guards/child.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication/authentication.service';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MoviesModule } from './movies.module'
import { AuthGuard } from './guards/auth.guard';
import { NgxScrollTopModule } from 'ngx-scrolltop';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewReleasesComponent,
    ArticleComponent,
    HomeComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    NgxScrollTopModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    RoutingModule,
    MoviesModule
  

  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}