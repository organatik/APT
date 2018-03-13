import {Component, Input, OnInit,  } from '@angular/core';
import { SelectedItemService } from '../../selected-item.service';

@Component({
  selector: 'app-middle-block',
  templateUrl: './middle-block.component.html',
  styleUrls: ['./middle-block.component.css']
})
export class MiddleBlockComponent implements OnInit  {
  item;
  index = 0;
  @Input() photos;



  constructor( private selectedItem: SelectedItemService) { }


  ngOnInit() {
    this.selectedItem.currentItem.subscribe(item => this.item = item);
    this.selectedItem.currentPhoto.subscribe(index => this.index = index);
  }
//   ngAfterViewChecked() {
//     this.detailPhotoIndex = this.index;
//     console.log(this.index);
//
// }

  nextPhoto() {
    if (this.index < this.photos[this.item].details.length - 1) {
      this.index = this.index + 1;
      console.log(this.index);
    }
  }
  prevPhoto() {
    if (this.index > 0) {
      this.index = this.index - 1;
      console.log(this.index);
    }
  }
}
