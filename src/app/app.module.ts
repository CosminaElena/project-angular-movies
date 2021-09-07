import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentGuard } from './guards/parent.guard';
import { ChildGuard } from './guards/child.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule} from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MoviesComponent,
    MovieDetailsComponent,
    WatchListComponent,
    NewReleasesComponent,
    ArticleComponent,
    HomeComponent,
    BlogComponent,

  ],
  imports: [
    RoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
   
    BrowserAnimationsModule
    
  ],
  providers: [
    ParentGuard,
    ChildGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
