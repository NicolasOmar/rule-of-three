import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
// INTERFACES
import { InputConfig } from '@shared/interfaces/form.interfaces';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() config: InputConfig;

  public _value: string | number;
  public onChanged;
  public onTouched;

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  public onInput(value: string | number): void {
    this.onChanged(value);
    this.onTouched();
  }

  public writeValue(val) {
    this._value = val;
  }

  public registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public get invalid(): boolean {
    return this.control ? this.control.invalid && this.control.touched : false;
  }
}
