import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
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

 

  constructor() { }
  fav: boolean;

  ngOnInit() {
  }
  completeItem(){
    this.update.emit({item: this.item, changes: {completed: !this.item.completed}});
  }

  removeItem(){
    this.remove.emit(this.item);
  }

  favItem(){
    console.log("in favItem()");
    this.update.emit({item: this.item, changes: {fav: !this.item.fav}});
    this.fav = this.item.fav; 
    console.log(this.item.fav + " fav: " + this.fav) ;
  }
  getFav(){
    return this.fav;
  }

}