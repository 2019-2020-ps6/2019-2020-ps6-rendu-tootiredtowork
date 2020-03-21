import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/models/answer.model';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

    @Input()
    answerList: Answer[];

    constructor() {
    }

    ngOnInit() {
    }
}