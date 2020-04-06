import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    faStar = faStar;

    @Input()
    quiz: Quiz;

    stars: number[] = [];

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {

    }

    ngOnInit(): void {
        for (var i = 0; i < this.quiz.difficulty; i++) {
            this.stars.push(i);
        }
        console.log(this.stars.length);
    }

    quizSelected() {
        console.log(this.quiz);
        this.quizService.setSelectedQuiz(this.quiz.id);
        this.router.navigateByUrl("quizgame");
    }
}