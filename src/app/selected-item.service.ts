import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectedItemService {
  private selectedItemSource = new BehaviorSubject(undefined);
  private selectedPhoto = new BehaviorSubject(0);
  currentItem = this.selectedItemSource.asObservable();
  currentPhoto = this.selectedPhoto.asObservable()
  constructor() { }

  changeItem(item) {
    this.selectedItemSource.next(item);
  }
  changePhoto(index) {
    this.selectedPhoto.next(index);
  }
}
