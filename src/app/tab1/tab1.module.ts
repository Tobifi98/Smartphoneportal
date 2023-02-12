import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderComponent } from '../header/header.component';
import { ItemPhoneComponent } from './item-phone/item-phone.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ScrollingModule
  ],
  declarations: [Tab1Page, HeaderComponent, ItemPhoneComponent]
})
export class Tab1PageModule {}
