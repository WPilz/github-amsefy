import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../app/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  constructor() { }

  ngOnInit() {
  }

}