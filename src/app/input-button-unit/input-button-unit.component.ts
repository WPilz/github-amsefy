import {Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'First Steps';
  constructor() { }

  ngOnInit() { }

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
 

}
  