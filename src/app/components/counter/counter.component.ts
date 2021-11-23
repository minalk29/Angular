import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnChanges {
  @Input()
counter:number=0;
@Output()
sendCount:EventEmitter<number>=new EventEmitter();
  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("changed");
  }
Count()
{
this.counter++;
this.sendCount.emit(this.counter);
}
  ngOnInit(): void {
  }

}
