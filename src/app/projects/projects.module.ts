import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FeaturesModule } from './features/features.module';

import { AppListComponent } from './app-list/app-list.component';
import { ProjectsComponent } from './projects.component';

export const ROUTES: Routes = [
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    FeaturesModule
  ],
  declarations: [ProjectsComponent, AppListComponent]
})
export class ProjectsModule {}