import { Component } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private device: Device) {}

  public onSdkVersion(): void {
    console.log(`sdkVersion: ${this.device.sdkVersion}`);
  }
}
