import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent
  ],
  imports: [CommonModule],
  exports: [TemplatesModule, IconsModule, TableLightComponent, BtnComponent],
})
export class SharedModule {}
