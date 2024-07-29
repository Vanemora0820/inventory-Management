import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInventoryComponent } from './components/register-inventory/register-inventory.component';
import { DeliverInventoryComponent } from './components/deliver-inventory/deliver-inventory.component';

const routes: Routes = [

  { path: 'register-inventory', component: RegisterInventoryComponent },
  { path: 'deliver-inventory', component: DeliverInventoryComponent },
  { path: '', redirectTo: '/register-inventory', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
