import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QUIZZES } from 'src/mocks/quiz.mock';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
    quizzes: Quiz[] = QUIZZES;

    constructor(private router: Router, public configService: ConfigurationService) {
    }

    ngOnInit() {
    }

    selectQuiz(quiz: Quiz) {
        this.router.navigateByUrl('/quiz/' + JSON.stringify(quiz));
    }
}