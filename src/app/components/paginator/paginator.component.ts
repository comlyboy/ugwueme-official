import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() length: number; // no of datas from d server
  @Input() dataPerPage: number; // data to display per-page
  @Input() currentPage: number; // current page navigated; is mostly 1
  @Input() currentDataLength: number; // current number of data on display table
  @Output() pageChange = new EventEmitter<{ newDataPerPage: number, newCurrentPage: number }>();

  isDesktopView = true;

  constructor(
    private utilityService: UtilityService
  ) {
    this.isDesktopView = this.utilityService.getIsDesktopDevice();
  }

  get dataLength() {
    return this.length;
  }

  get currentListLength() {
    return this.currentDataLength;
  }

  get current_page() {
    return this.currentPage;
  }

  get pagesToGo() {
    return this.initPaginator();
  }


  private initPaginator() {
    if (this.dataPerPage > this.length) {
      return 1;
    }
    const remainder = this.length % this.dataPerPage;
    const pageToGo = Number((this.length / this.dataPerPage).toFixed(0));
    if (remainder === 0) {
      return pageToGo;
    }
    return pageToGo + 1;
  }


  onPrev() {
    if (this.currentPage <= 1) return;
    this.currentPage--;
    this.onChangePage();
  }

  onNext() {
    if (this.currentPage >= this.pagesToGo) { return; }
    this.currentPage++;
    this.onChangePage();
  }


  onChangePage() {
    this.pageChange.emit({ newDataPerPage: this.dataPerPage, newCurrentPage: this.currentPage });
  }



}
