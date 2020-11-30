import { AfterViewInit, Component, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
// INTERFACES
import { InputConfig } from '@shared/interfaces/form.interfaces';
// ENUMS
import { TypeEnum } from '@shared/enums/inputs.enums';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements AfterViewInit {
  @Input() config: InputConfig;

  public typeEnum = TypeEnum;
  public _value: string | number;
  public onChanged;
  public onTouched;

  constructor(@Self() @Optional() public control: NgControl, private renderer: Renderer2) {
    this.control && (this.control.valueAccessor = this);
  }

  ngAfterViewInit(): void {
    this.setInputFocus();
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

  private setInputFocus(): void {
    if (this.config.setFocus) {
      const element = this.renderer.selectRootElement('.focusInput');
      element.focus();
    }
  }
}
