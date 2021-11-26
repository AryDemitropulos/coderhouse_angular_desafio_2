import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  @Input() img: String;
  @Input() name: String;

  constructor() {}

  ngOnInit(): void {}
}
