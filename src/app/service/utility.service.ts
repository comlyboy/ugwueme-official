import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }


  setPageTitle(pageTitle: string) {
    this.title.setTitle(`${pageTitle} - Ugwueme Autonomous Community`);
  }

  setPageMetaData(metaData: MetaDefinition[]) {
    this.meta.addTags(metaData);
  }

}
