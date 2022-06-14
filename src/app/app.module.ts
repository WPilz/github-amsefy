import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoItemComponent } from '../todo-item/todo-item.component';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import {ListManagerComponent} from './list-manager/list-manager.component';
import { TodoListService } from './todo-list.service';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
