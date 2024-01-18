import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatreCentQuatreComponent } from './core/error/quatre-cent-quatre/quatre-cent-quatre.component';

const routes: Routes = [

     {
          path: '',
          loadChildren: () => import('./internaute/internaute.module').then(m => m.InternauteModule),
          // canActivate: [adminGuard, bailleurGuard, userGuard],
     },
     {
          path: 'auth',
          loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
     },
     {
          path: '**',
          component: QuatreCentQuatreComponent,
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
