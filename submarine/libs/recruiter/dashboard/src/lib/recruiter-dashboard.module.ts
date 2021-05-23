import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', loadChildren: () => import('./dashboard.module').then(m => m.DashboardModule) }
      // {path: '', pathMatch: 'full', component: DashboardComponent}
    ]),
  ],
})
export class RecruiterDashboardModule {}
