import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page],
  providers: [AppReview, Device, Diagnostic, FirebaseMessaging],
})
export class Tab1PageModule {}
