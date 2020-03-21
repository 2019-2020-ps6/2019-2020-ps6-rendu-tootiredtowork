import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quizz.model';
import { QUIZ } from 'src/mocks/quiz.mock';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    quiz: Quiz = QUIZ;

    constructor() {
    }

    ngOnInit() {
    }
}