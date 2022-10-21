import { Component } from '@angular/core';
import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';
import { Platform } from '@ionic/angular';

const PERMISSION = 'POST_NOTIFICATIONS';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public permission: boolean;
  public token: string;

  constructor(
    private appReview: AppReview,
    private device: Device,
    private diagnostic: Diagnostic,
    private firebaseMessaging: FirebaseMessaging,
    private platform: Platform
  ) {}

  ionViewDidEnter(): void {
    this.diagnostic
      .isRemoteNotificationsEnabled()
      .then((permission) => (this.permission = permission));

    this.getToken();
  }

  public onRequestPermission(): void {
    if (this.isIos()) {
      this.firebaseMessaging.requestPermission({ forceShow: true });
    } else if (this.isAndroid() && parseInt(this.device.sdkVersion, 10) >= 33) {
      this.diagnostic.requestRuntimePermission(PERMISSION);
    }
  }

  public onGetToken(): void {
    this.getToken();
  }

  public onDeleteToken(): void {
    this.firebaseMessaging.deleteToken();
  }

  public onRequestReview(): void {
    this.appReview
      .requestReview()
      .then(() => alert('Success'))
      .catch((error: any) => alert(error));
  }

  public onOpenStoreScreen(pkg?: string): void {
    this.appReview
      .openStoreScreen(pkg)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  private getToken(): void {
    const option = this.isIos() ? 'apns-string' : null;
    this.firebaseMessaging
      .getToken(option)
      .then((token) => (this.token = token));
  }

  private isIos(): boolean {
    return this.platform.is('ios');
  }

  private isAndroid(): boolean {
    return this.platform.is('android');
  }
}
