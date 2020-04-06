import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
    quiz: Quiz;

    constructor(public configService: ConfigurationService, private route: ActivatedRoute, private quizService: QuizService) {
    }

    ngOnInit(): void {
        this.quiz = this.quizService.getQuizByid(this.route.snapshot.paramMap.get('quiz'));
    }
}