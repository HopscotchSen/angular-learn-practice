import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  @Input() info: string;

  @Output() changeInfo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.changeInfo.emit();
  }

}
