import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  public title: string;
  constructor() {
    // mock title
    this.title = 'Ohhhhh le joli title';
  }

  ngOnInit(): void {}
}
