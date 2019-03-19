import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
 ifOpenModal = false;
  constructor() { }

  ngOnInit() {
  }
  toggleModal() {
    this.ifOpenModal = !this.ifOpenModal;
  }
}
