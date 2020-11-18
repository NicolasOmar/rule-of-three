import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TitleComponent } from './components/title/title.component';

const COMPONENTS = [LayoutComponent, FormInputComponent, TitleComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
