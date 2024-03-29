import { DoCheck, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { TodoItem } from './todo-item';


const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {title: 'install ItenlliJ', fav: false},
  {title: 'install Angular CLI', fav: false},
  {title: 'create new app', fav: false},
  {title: 'serve app', fav: false},
  {title: 'develop app', fav: false},
  {title: 'deploy app', fav: false},
];

@Injectable(
  {providedIn: 'root'}
)

export class TodoListService  {
  todoList: TodoItem[];  
  constructor(private storageService: StorageService) {
    this.todoList = 
    storageService.getData(todoListStorageKey) || defaultTodoList;
   }

  getTodoList(){
    return this.todoList;
  }

  addItem( item: TodoItem){
    this.todoList.push(item);
    this.saveList();
    }
  updateItem(item: TodoItem, changes){
    this.todoList[this.getIndex(item)] = {...item, ...changes};
    this.saveList();
  }
  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList); 
  }
  getIndex(item: TodoItem){
   return  this.todoList.indexOf(item);
  }
  deleteItem(item: TodoItem){
    this.todoList.splice(this.getIndex(item), 1);
    this.saveList();
  }
}