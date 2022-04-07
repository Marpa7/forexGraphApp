import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForexComponent } from './components/forex/forex.component';

const routes: Routes = [
  { path: '', component: ForexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
