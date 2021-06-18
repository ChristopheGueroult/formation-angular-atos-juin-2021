import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [
    TemplatesModule,
    IconsModule,
    ReactiveFormsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
