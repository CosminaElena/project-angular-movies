import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildGuard } from './guards/child.guard';
import { ParentGuard } from './guards/parent.guard';


const routes: Routes = [
  { 
    path: '', component: LoginComponent, 
    data: {
      title: 'Movies App - Login'
    }
  },

  { 
    path: 'home', component: HomeComponent, 
    canActivate:[AuthGuard, ParentGuard],
    data: {
      title: 'Movies App - Home', 
      
    }
  },

  { 
    path: 'navbar', component: NavbarComponent, 
    canActivate:[AuthGuard]
  },

  {
    path: 'article', component: ArticleComponent, 
    canActivate:[AuthGuard],
    data: 
    {
      title: 'Movies App - Article', 
    }
  },

  {
    path: 'new-releases', component: NewReleasesComponent, 
    canActivate:[AuthGuard],
    data: 
    {
      title: 'Movies App - New Releases', 
    }
  },

  {
    path: 'blog', component: BlogComponent, 
    canActivate:[AuthGuard],
    data: 
    {
      title: 'Movies App - Blog', 
    }
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}