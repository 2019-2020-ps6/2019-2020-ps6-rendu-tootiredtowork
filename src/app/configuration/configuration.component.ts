import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  defaultFontSize: number;

  constructor(public configService: ConfigurationService) {
  }

  ngOnInit() {
    this.defaultFontSize = this.configService.fontSize;
  }

  updateFontSize(value) {
    this.configService.fontSize = value;
  }
}