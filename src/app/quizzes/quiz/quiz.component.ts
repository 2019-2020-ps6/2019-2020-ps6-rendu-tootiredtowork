import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { QuizService } from 'src/services/quiz.service';
import { CarouselItemComponent } from 'src/app/carousel/carousel-item.component';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements CarouselItemComponent, OnInit {
    faStar = faStar;

    _data: Quiz;

    @Input() set data(quiz: Quiz) {
        for (var i = 0; i < quiz.difficulty; i++) {
            this.stars.push(i);
        }
        this._data = quiz;
    }

    stars: number[] = [];

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {
    }

    ngOnInit(): void {
    }

    quizSelected() {
        this.quizService.quizSelected = this._data;
        this.router.navigateByUrl("/quizgame");
    }

    getQuestionNumberString(): String {
        if (this._data.questions.length == 1) {
            return ":   ".concat(this._data.questions.length.toString());
        }
        else if (this._data.questions.length < 10) {
            return "s:  ".concat(this._data.questions.length.toString());
        }
        else {
            return "s: ".concat(this._data.questions.length.toString());
        }
    }
}