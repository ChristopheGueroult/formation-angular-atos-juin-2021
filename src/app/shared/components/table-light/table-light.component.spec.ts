import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLightComponent } from './table-light.component';

describe('TableLightComponent', () => {
  let component: TableLightComponent;
  let fixture: ComponentFixture<TableLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
