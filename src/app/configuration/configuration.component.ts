import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  defaultFontSize: number;
  defaultText: string;
  defaultBoxe: string;
  defaultBackground: string;
  defaultMarginSize: number;

  constructor(public configService: ConfigurationService) {
  }

  ngOnInit() {
    this.defaultFontSize = this.configService.fontSize;
    this.defaultBoxe = this.configService.boxe;
    this.defaultText = this.configService.text;
    this.defaultBackground = this.configService.background;
    this.defaultMarginSize = this.configService.marginSize;
  }
}