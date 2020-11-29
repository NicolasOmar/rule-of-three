import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { RuleFormComponent } from '@core/components/rule-form/rule-form.component';
// ENUMS
import { RouteEnum, RouteStringEnum } from '@shared/enums/routes.enums';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RouteEnum.First,
    pathMatch: 'full'
  },
  {
    path: RouteStringEnum.First,
    component: RuleFormComponent
  },
  {
    path: RouteStringEnum.Second,
    component: RuleFormComponent
  },
  {
    path: RouteStringEnum.Third,
    component: RuleFormComponent
  },
  {
    path: '**',
    redirectTo: RouteStringEnum.First
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
