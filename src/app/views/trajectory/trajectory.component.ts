import { Component, OnInit } from '@angular/core';
import { Brand } from '../../interfaces/Brand';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.css'],
})
export class TrajectoryComponent implements OnInit {
  brands: Brand[] = [
    { name: 'Apple', img: 'apple.png' },
    { name: 'Microsoft', img: 'microsoft.png' },
    { name: 'Testa', img: 'testa.png' },
    { name: 'Amazon', img: 'Amazon.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
