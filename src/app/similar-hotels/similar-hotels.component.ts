import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';

@Component({
  selector: 'similar-hotels',
  templateUrl: './similar-hotels.component.html',
  styleUrls: ['./similar-hotels.component.scss']
})
export class SimilarHotelsComponent implements OnInit {
  // @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  //
  // moveLeft() {
  //   this.ds.moveLeft();
  // }
  //
  // moveRight() {
  //   this.ds.moveRight();
  // }
  constructor() { }

  ngOnInit() {
  }


}
