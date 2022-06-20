import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../app/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  fav: boolean;

  constructor() { }


  ngOnInit() {
  }
  completeItem(){
    this.update.emit({item: this.item, changes: {completed: !this.item.completed}});
  }

  removeItem(){
    this.remove.emit(this.item);
  }

  favClicked(){
    if(this.fav){
      this.fav = false;
    } else{
      this.fav = true;
    }
  }

}