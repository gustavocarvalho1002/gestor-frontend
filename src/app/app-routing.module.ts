import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestorComponent } from './gestor/gestor.component';
import { CriarGestorComponent } from './criar-gestor/criar-gestor.component';


const routes: Routes = [
  { path: 'gestor', component: GestorComponent },
  { path: 'criar-gestor', component: CriarGestorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
