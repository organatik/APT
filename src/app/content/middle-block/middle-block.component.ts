import {Component, Input, OnInit,  } from '@angular/core';
import { SelectedItemService } from '../../selected-item.service';

@Component({
  selector: 'app-middle-block',
  templateUrl: './middle-block.component.html',
  styleUrls: ['./middle-block.component.css']
})
export class MiddleBlockComponent implements OnInit  {
  item;
  index;
  detailPhotoIndex = 0;
  @Input() photos;
  selectedValue;


  constructor( private selectedItem: SelectedItemService) { }


  ngOnInit() {
    this.selectedItem.currentItem.subscribe(item => this.item = item);
    this.selectedItem.currentPhoto.subscribe(index => this.index = index);
    console.log(this.detailPhotoIndex);
    console.log(this.item);
  }
//   ngAfterViewChecked() {
//     this.detailPhotoIndex = this.index;
//     console.log(this.index);
//
// }

  test() {
    console.log(this.selectedValue);
  }
  nextPhoto() {
    if (this.detailPhotoIndex < this.photos[this.item].details.length - 1) {
      this.detailPhotoIndex = this.detailPhotoIndex + 1;
      console.log(this.detailPhotoIndex);
    }
  }
  prevPhoto() {
    if (this.detailPhotoIndex > 0) {
      this.detailPhotoIndex = this.detailPhotoIndex - 1;
      console.log(this.detailPhotoIndex);
    }
  }
}
