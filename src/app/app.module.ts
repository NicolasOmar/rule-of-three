import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';
// MODULES
import { SharedModule } from '@shared/shared.module';
// APP COMPONENT
import { AppComponent } from '@core/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
