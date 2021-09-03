import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { ChildGuard } from './guards/child.guard';
import { ParentGuard } from './guards/parent.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  { path: 'navbar', component: NavbarComponent },

  {
    path: 'movies',
    canActivate: [ParentGuard],
    canActivateChild: [ChildGuard],
    children: [
      { path: '', pathMatch: 'full', component: MoviesComponent },
      { path: 'watch-list', component: WatchListComponent },
      {path: ':movieId', component: MovieDetailsComponent},
      
    ],
  },

  {
    path: 'article',
    component: ArticleComponent,
  },

  {
    path: 'new-releases',
    component: NewReleasesComponent,
  },

  {
    path: 'blog',
    component: BlogComponent,
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule],
})
export class RoutingModule {}
