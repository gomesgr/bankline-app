import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';

const routes: Routes = [
  {path: 'movimentacao-new', component: MovimentacaoNewComponent},
  {path: 'movimentacao', component: MovimentacaoListComponent},
  {path: '', redirectTo: 'movimentacao', pathMatch: 'full'},
  { path: 'correntista', component: CorrentistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
