import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    @Input()
    question: Question;

    @Output()
    answered: EventEmitter<Answer> = new EventEmitter<Answer>();


    constructor() {
    }

    ngOnInit() {
    }

    answerSelected(answer: Answer) {
        if (answer.isCorrect) {
            console.log("Bonne réponse !");
        } else {
            console.log("Mauvaise réponse :(");
        }
        this.answered.emit(answer);
    }
}