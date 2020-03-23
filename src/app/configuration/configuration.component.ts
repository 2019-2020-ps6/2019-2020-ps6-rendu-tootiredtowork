import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  fontSize: number = 25;

  constructor() {
  }

  ngOnInit() {
  }

  changeSize() {
    return this.fontSize + 'px';
  }


}