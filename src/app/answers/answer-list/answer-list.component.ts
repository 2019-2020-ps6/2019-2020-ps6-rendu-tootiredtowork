import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/models/answer.model';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

    @Input()
    answerList: Answer[];

    @Output()
    answerSelected: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor() {
    }

    ngOnInit() {
    }

    answer(answer: Answer) {
        this.answerSelected.emit(answer);
    }
}