import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInventoryComponent } from './components/register-inventory/register-inventory.component';
import { DeliverInventoryComponent } from './components/deliver-inventory/deliver-inventory.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  { path: 'register-inventory', component: RegisterInventoryComponent },
  { path: 'deliver-inventory', component: DeliverInventoryComponent },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
