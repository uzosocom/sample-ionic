import { Component } from '@angular/core';
import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private appReview: AppReview) {}

  public onRequestReview() {
    this.appReview
      .requestReview()
      .then(() => console.log('Success'))
      .catch((error: any) => console.error(error));
  }

  public onOpenStoreScreen(pkg?: string) {
    this.appReview
      .openStoreScreen(pkg)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }
}
