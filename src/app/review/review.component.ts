import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

    quiz: Quiz;
    current: Question;

    seek = 0;
    score = 0;
    max;
    
    constructor(public configService: ConfigurationService) {
        console.log(this.quiz);    
    }

    ngOnInit() {
    }
}