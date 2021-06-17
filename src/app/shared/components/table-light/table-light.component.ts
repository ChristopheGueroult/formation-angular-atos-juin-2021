import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  constructor() {}

  ngOnInit(): void {}
}
