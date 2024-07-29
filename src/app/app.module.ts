import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterInventoryComponent } from './components/register-inventory/register-inventory.component';
import { DeliverInventoryComponent } from './components/deliver-inventory/deliver-inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/notification/notification.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterInventoryComponent,
    DeliverInventoryComponent,
    NotificationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
