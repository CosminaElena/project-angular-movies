import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Movies } from './movies/movies/movies.movie';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { WatchList } from './movies/watch-list/watch-list.movie';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentGuard } from './guards/parent.guard';
import { ChildGuard } from './guards/child.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetails } from './movies/movie-details/movie-details.movie';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication/authentication.service';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AppRoutingModule } from './app-routing.modules';
// import { MoviesModule } from './movies.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    Movies,
    MovieDetails,
    WatchList,
    NewReleasesComponent,
    ArticleComponent,
    HomeComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
   AppRoutingModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    RoutingModule,
    Title,
    // MoviesModule,
   

  ],

  providers: [
    ParentGuard, 
    ChildGuard, 
    AuthenticationService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
