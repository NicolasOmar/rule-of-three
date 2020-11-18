import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() text: string;
}
