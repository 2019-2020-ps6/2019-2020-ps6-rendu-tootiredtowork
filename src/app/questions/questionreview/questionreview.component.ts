import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-question-review',
    templateUrl: './questionreview.component.html',
    styleUrls: ['./questionreview.component.scss']
})
export class QuestionReviewComponent implements OnInit {

    @Input()
    question: Question;

    constructor() {
    }

    ngOnInit() {
    }

}