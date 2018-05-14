import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: 'apps',
    canActivate: [AuthGuard],
    loadChildren:
      './organization-app/organization-app.module#OrganizationAppModule'
  }
];

@NgModule({
  imports: [SharedModule.forRoot(), RouterModule.forChild(ROUTES)]
})
export class ContainersModule {}
