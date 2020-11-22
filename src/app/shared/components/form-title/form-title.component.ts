import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.scss']
})
export class FormTitleComponent {
  @Input() text: string;
}
