import { Component, OnInit } from '@angular/core';
import { RuleDataService } from '@core/services/rule-data.service';
import { RuleSelector } from '@shared/interfaces/rule.interfaces';

@Component({
  selector: 'rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.scss']
})
export class RuleSelectorComponent implements OnInit {
  public rules: Array<RuleSelector> = [];

  constructor(private ruleDataService: RuleDataService) {}

  ngOnInit(): void {
    this.setRules();
  }

  private setRules(): void {
    this.rules = this.ruleDataService.rules;
  }
}
