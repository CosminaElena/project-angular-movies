import { WatchList } from './movies/watch-list/watch-list.movie';
import { ChildGuard } from './guards/child.guard';
import { ParentGuard } from './guards/parent.guard';
import { MovieDetails } from './movies/movie-details/movie-details.movie';
import { Movies } from './movies/movies/movies.movie';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
{
  path: 'movie',
  canActivate: [ParentGuard], 
  canActivateChild: [ChildGuard],
  children: [
    { path: '', pathMatch: 'full', component: Movies, canActivate:[AuthGuard] },

    { path: 'watch-list', component: WatchList, canActivate:[AuthGuard] },
    { path: 'movie-details/:id', component: MovieDetails, canActivate:[AuthGuard] },
    
  ],
},
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true })],

    
    exports: [RouterModule],
  })
  export class AppRoutingModule {}