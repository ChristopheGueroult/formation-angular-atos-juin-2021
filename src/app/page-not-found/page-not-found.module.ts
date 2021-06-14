import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
