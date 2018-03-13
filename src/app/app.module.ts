import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { MiddleBlockComponent } from './content/middle-block/middle-block.component';
import { RightSideBarComponent } from './content/right-side-bar/right-side-bar.component';
import { FooterContentComponent } from './content/footer-content/footer-content.component';
import {SelectedItemService} from './selected-item.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    ContentComponent,
    MiddleBlockComponent,
    RightSideBarComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [SelectedItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
