import { Component, OnInit } from '@angular/core';
import { Question, getCorrectAnswer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Answer } from 'src/models/answer.model';
import { GameService } from 'src/services/game.service';


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
    quiz: Quiz;

    seek = 0;
    current: Question;
    correctAnswer: Answer;

    constructor(public configService: ConfigurationService, public gameService: GameService) {
        this.quiz = gameService.getGame().quiz;
        this.current = this.quiz.questions[this.seek];
        this.correctAnswer = getCorrectAnswer(this.current);
    }

    next() {
        if (this.seek < this.quiz.questions.length - 1) {
            this.seek++;
            this.current = this.quiz.questions[this.seek];
            this.correctAnswer = getCorrectAnswer(this.current);
        }
    }

    prev() {
        if (this.seek > 0) {
            this.seek--;
            this.current = this.quiz.questions[this.seek];
            this.correctAnswer = getCorrectAnswer(this.current);
        }
    }

    ngOnInit() {
    }
}