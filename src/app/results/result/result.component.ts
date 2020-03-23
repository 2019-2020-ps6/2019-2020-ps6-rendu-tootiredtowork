import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    score;
    max;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.score = this.route.snapshot.paramMap.get('score');
        this.max = this.route.snapshot.paramMap.get('max');
    }
}