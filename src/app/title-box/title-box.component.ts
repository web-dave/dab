import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() boxtitle: string;
  constructor() {}

  ngOnInit() {}
}
