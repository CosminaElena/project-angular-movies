
import { NgModule } from '@angular/core';
import { Movies } from './movies/movies/movies.movie';
import { MovieDetails } from './movies/movie-details/movie-details.movie';
import { WatchList } from './movies/watch-list/watch-list.movie';
// import { ParentGuard } from './guards/parent.guard';
// import { ChildGuard } from './guards/child.guard';
import { AppRoutingModule } from './app-routing.modules'
import { BrowserModule } from '@angular/platform-browser';




@NgModule ({
    declarations: [ 
        Movies,
        MovieDetails,
        WatchList,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    
    ]
    
    })

    export class MoviesModule {}