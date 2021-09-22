import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';


const routes: Routes = [
  { path: '', component: LoginComponent, data: {title: 'Movies App - Login'}},

  { path: 'home', component: HomeComponent, data: {title: 'Movies App - Home'}},

  { path: 'navbar', component: NavbarComponent },

  {
    path: 'article',
    component: ArticleComponent, data: {title: 'Movies App - Article'}
  },

  {
    path: 'new-releases',
    component: NewReleasesComponent, data: {title: 'Movies App - New Releases'}
  },

  {
    path: 'blog',
    component: BlogComponent, data: {title: 'Movies App - Blog'}
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class RoutingModule {}
