import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleFormComponent } from './components/rule-form/rule-form.component';
import { RuleSelectorComponent } from './components/rule-selector/rule-selector.component';

@NgModule({
  declarations: [RuleFormComponent, RuleSelectorComponent],
  imports: [CommonModule]
})
export class CoreModule {}
