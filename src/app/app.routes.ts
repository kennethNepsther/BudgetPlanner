import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'budget-planner',loadChildren:()=> import('./budget-planner/budget-planner-routing.module').then(m => m.BudgetPlannerRoutingModule)}
];
