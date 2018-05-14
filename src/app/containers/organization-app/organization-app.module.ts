import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

import { OrganizationAppComponent } from './organization-app.component';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

import { FeaturesComponent } from '../../components/features/features.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: OrganizationAppComponent,
    children: [{ path: ':id', component: FeaturesComponent }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: [OrganizationAppComponent]
})
export class OrganizationAppModule {}
