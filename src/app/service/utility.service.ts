import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private title: Title,
    private meta: Meta,
    private deviceService: DeviceDetectorService
  ) {
  }


  setPageTitle(pageTitle: string) {
    this.title.setTitle(`${pageTitle} - Ugwueme Autonomous Community`);
  }

  setPageMetaData(metaData: MetaDefinition[]) {
    this.meta.addTags(metaData);
  }


    /**
 * Check for current device screen size.
 * 
 * Returns `true` if desktop screen or `false` for smaller screens.
 */
     getIsDesktopDevice() {
      // this returns true if is a computer screen size 
      return this.deviceService.isDesktop();
    }
  

}
