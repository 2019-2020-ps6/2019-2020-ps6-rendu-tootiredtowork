import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-editable-quiz',
    templateUrl: './editable-quiz.component.html',
    styleUrls: ['./editable-quiz.component.scss']
})
export class EditableQuizComponent implements OnInit {
    faStar = faStar;

    @Input()
    quiz: Quiz;

    stars: number[] = [];

    constructor(private router: Router, public configService: ConfigurationService) {
    }

    ngOnInit(): void {
        for (var i = 0; i < this.quiz.difficulty; i++) {
            this.stars.push(i);
        }
        console.log(this.stars.length);
    }

    quizSelected() {
        this.router.navigateByUrl('/quiz/' + JSON.stringify(this.quiz));
    }
}