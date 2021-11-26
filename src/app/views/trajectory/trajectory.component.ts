import { Component, OnInit } from '@angular/core';
import { Brand } from '../../interfaces/Brand';
import { Comment } from '../../interfaces/Comment';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.css'],
})
export class TrajectoryComponent implements OnInit {
  brands: Brand[] = [
    { name: 'Apple', img: 'apple.jpg' },
    { name: 'Microsoft', img: 'microsoft.jpg' },
    { name: 'Amazon', img: 'amazon.jpg' },
    { name: 'Tesla', img: 'tesla.jpg' },
  ];

  comments: Comment[] = [
    {
      author: 'Steve Jobs',
      img: 'steve.jpg',
      comment: 'One day, Ary bit an apple... and that was it... Genius',
    },
    {
      author: 'Bill Gates',
      img: 'bill.jpg',
      comment:
        'I remember every day how Ary once came to me and said "We should make a game and call it Age of Empires"',
    },
    {
      author: 'Jeff bezos',
      img: 'jeff.jpg',
      comment:
        'When I worked with Ary, he told me that we should expand into Latin America, and maybe call ourselves something like "FreeMarket". I should have listen him... Now it\'s to late',
    },
    {
      author: 'Elon Musk',
      img: 'elon.jpg',
      comment:
        'So, I was working next to Ary and out of nowhere he said "I bet you that you can\'t send a car into space"... He always encouraged me to overcome myself',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
