import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
    quizzes: Quiz[] = [];

    constructor(public configService: ConfigurationService, public quizService: QuizService) {
        this.quizService.quizzes$.subscribe((list_quizzes: Quiz[]) => {
            this.quizzes = list_quizzes;
        });
    }

    ngOnInit() {
    }
}