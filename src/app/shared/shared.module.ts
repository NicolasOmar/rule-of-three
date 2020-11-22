import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormTitleComponent } from './components/form-title/form-title.component';

const COMPONENTS = [LayoutComponent, FormInputComponent, FormTitleComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
