import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/answer.model';
import { Question } from 'src/models/question.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-quiz-game',
    templateUrl: './quiz-game.component.html',
    styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent implements OnInit {
    quiz: Quiz;
    current: Question;

    seek = 0;
    score = 0;

    max;

    constructor(private router: Router, private route: ActivatedRoute, public configService: ConfigurationService) {
    }

    ngOnInit() {
        this.quiz = JSON.parse(this.route.snapshot.paramMap.get('quiz'));
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