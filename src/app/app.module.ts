import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';
// MODULES
import { SharedModule } from '@shared/shared.module';
// BASE COMPONENTS
import { AppComponent } from '@core/components/app/app.component';
import { RuleFormComponent } from '@core/components/rule-form/rule-form.component';
import { RuleSelectorComponent } from '@core/components/rule-selector/rule-selector.component';

@NgModule({
  declarations: [AppComponent, RuleFormComponent, RuleSelectorComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
