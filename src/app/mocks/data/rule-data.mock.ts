import { RuleSelector } from '@shared/interfaces/rule.interfaces';
// ENUMS
import { RouteEnum } from '@shared/enums/routes.enums';

export const RuleDataMock: Array<RuleSelector> = [
  {
    label: 'USD por hora/palabra',
    route: RouteEnum.First
  },
  {
    label: 'USD por hora de jornada',
    route: RouteEnum.Second
  },
  {
    label: 'USD por pagina/palabra',
    route: RouteEnum.Third
  }
];
