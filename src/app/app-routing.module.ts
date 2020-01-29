import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '**', component: HomeComponent }
];

/* A router mindig a legelső találatra fog ugrani. A csillagozott elérési utat
 ezért kell az utolsó helyre tenni, mert az csak egy biztonsági útvonal, hogy találjon
 route egyezést.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
