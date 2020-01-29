import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() boxtitle: string;
  @Output() boxoutput = new EventEmitter<string>();
  constructor() {}
  sendIt() {
    this.boxoutput.emit('My Title: ' + this.boxtitle);
  }
  ngOnInit() {}
}
