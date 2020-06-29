import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwitPageComponent } from './pages/twit-page/twit-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tweet', component: TwitPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
