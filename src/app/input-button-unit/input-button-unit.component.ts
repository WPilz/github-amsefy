import {Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  filterOn : boolean;
  title = 'First Steps';
  constructor() { }

  ngOnInit() { }

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }
  sendFilter(filterState: boolean){
    this.filter.emit(filterState);

  }
  changeFilter(){
    this.filterOn = !this.filterOn;
    this.sendFilter(this.filterOn);
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  @Output() filter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
 

}
  