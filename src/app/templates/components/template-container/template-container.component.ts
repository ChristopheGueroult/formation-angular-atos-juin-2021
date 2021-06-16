import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit {
  public title: string;
  constructor() {
    // mock title
    this.title = 'Ohhhhh le joli title';
  }

  ngOnInit(): void {}
}
