import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor() { }
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  ngOnInit() {
  }
  addItem(title: string, completed?: boolean){
    this.todoList.push({title, completed});
  }

}