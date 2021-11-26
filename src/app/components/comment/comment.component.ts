import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() author: String;
  @Input() img: String;
  @Input() comment: String;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
