import { Component, OnInit, Input } from '@angular/core';
import {SelectedItemService} from '../../selected-item.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {
  mySelectedItem;
  @Input() photos;
  constructor( private selectedItem: SelectedItemService) { }
  ngOnInit() {

  }

  selectItem(index) {
    this.mySelectedItem = index;
    this.selectedItem.changeItem(this.mySelectedItem);
    this.selectedItem.changePhoto(0);
  }



}
