import { Component, Input, OnInit } from '@angular/core';
import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';
// INTERFACES
import { LabelConfig } from '@shared/interfaces/inputs.interface';

@Component({
  selector: 'result-label',
  templateUrl: './result-label.component.html',
  styleUrls: ['./result-label.component.scss']
})
export class ResultLabelComponent implements OnInit {
  @Input() config: LabelConfig;
  public labelClasses: string;

  ngOnInit(): void {
    this.setClasses();
  }

  private setClasses(): void {
    const ui = 'ui';
    const size = this.config.size || SizeEnum.big;
    const color = this.config.color || ColorEnum.red;
    this.labelClasses = `${ui} ${size} ${color} horizontal label`;
  }
}
