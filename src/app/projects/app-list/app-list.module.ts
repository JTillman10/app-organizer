import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppListComponent } from './app-list.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule.forRoot()],
  declarations: [AppListComponent],
  exports: [AppListComponent]
})
export class AppListModule {}
