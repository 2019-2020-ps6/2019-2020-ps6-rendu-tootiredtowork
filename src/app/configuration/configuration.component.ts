import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

    fontSize: number = 10;
    margeSize: number = 10;
    appareilStatus: string='allumé';

    constructor() {

    setTimeout(
      () => {
        this.appareilStatus = 'éteint';
      }, 4000
    );
  }
    
    ngOnInit() {
    }

    goQuiz() {
        console.log("ok");
    }

    changeSize(){
        return this.fontSize+'px';
    }


}