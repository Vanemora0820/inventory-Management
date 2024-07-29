import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterInventoryComponent } from './components/register-inventory/register-inventory.component';
import { DeliverInventoryComponent } from './components/deliver-inventory/deliver-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterInventoryComponent,
    DeliverInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
