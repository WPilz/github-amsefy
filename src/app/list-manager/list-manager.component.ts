import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [];
  showList: TodoItem[] = [];
  constructor(private todoListService: TodoListService) {
  
   }
 
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string){
    this.todoListService.addItem({title});
  }
  removeItem(item): void{
    this.todoListService.deleteItem(item);
  }
  updateItem(item, changes){
    this.todoListService.updateItem(item, changes);
  }
  showFavs(filter){
    if(filter) this.showList = this.todoList.filter(e => e.fav);
    else this.showList = this.todoList;
  }
  }


