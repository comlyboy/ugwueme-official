import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild("map")
  mapElement!: ElementRef;
  
  @Input() private _apikey: any;
  @Input() lat: any;
  @Input() lng: any;
  @Input()  width: any;
  @Input()  height: any;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    let platform = new H.service.Platform({
      "apikey": this._apikey
    });
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
  }

}
