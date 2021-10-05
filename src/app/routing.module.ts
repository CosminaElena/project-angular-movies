import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, data: {title: 'Movies App - Login'}},

  { path: 'home', component: HomeComponent, data: {title: 'Movies App - Home', canActivate:[AuthGuard]}},

  { path: 'navbar', component: NavbarComponent, canActivate:[AuthGuard]},

  {
    path: 'article',
    component: ArticleComponent, data: {title: 'Movies App - Article', canActivate:[AuthGuard]}
  },

  {
    path: 'new-releases',
    component: NewReleasesComponent, data: {title: 'Movies App - New Releases', canActivate:[AuthGuard]}
  },

  {
    path: 'blog',
    component: BlogComponent, data: {title: 'Movies App - Blog', canActivate:[AuthGuard]}
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class RoutingModule {}
