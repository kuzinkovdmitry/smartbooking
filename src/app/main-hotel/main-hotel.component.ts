import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-hotel',
  templateUrl: './main-hotel.component.html',
  styleUrls: ['./main-hotel.component.scss']
})
export class MainHotelComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: '../../assets/main-hotel.svg', alt: 'Description for Image 1', title: 'Title 1'});
  }

}
