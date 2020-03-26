import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quizz.model';
import { QUIZ } from 'src/mocks/quiz.mock';
import { Answer } from 'src/models/answer.model';
import { Question } from 'src/models/question.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    quiz: Quiz;
    max;
    seek = 0;
    current: Question;

    score = 0;

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {
    }

    ngOnInit() {
        this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
            this.quiz = quiz;
        });
        this.max = this.quiz.questions.length;
        this.current = this.quiz.questions[this.seek];
    }

    next() {
        if (this.seek < this.max - 1) {
            this.current = this.quiz.questions[++this.seek];
        }
        else {
            this.router.navigateByUrl('/result/' + this.score + '/' + this.max);
        }
    }

    answered(answer: Answer) {
        if (answer.isCorrect) this.score++;
        this.next();
    }
}