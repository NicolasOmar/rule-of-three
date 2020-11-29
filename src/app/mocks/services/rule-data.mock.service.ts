import { Injectable } from '@angular/core';
// INTERFACES
import { RuleSelector } from '@shared/interfaces/rule.interfaces';
// MOCKS
import { RuleDataMock } from '@mocks/data/rule-data.mock';

@Injectable({
  providedIn: 'root'
})
export class RuleDataMockService {
  public ruleSelectors: Array<RuleSelector> = [...RuleDataMock];
}
