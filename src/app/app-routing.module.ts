import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./@modules/main.module').then(m => m.MainModule) },
  { path: 'feature', loadChildren: () => import('./@features/feature.module').then(m => m.FeatureModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
