import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x: number;
  y: number;
  constructor() {}

  ngOnInit() {}

  maus(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
