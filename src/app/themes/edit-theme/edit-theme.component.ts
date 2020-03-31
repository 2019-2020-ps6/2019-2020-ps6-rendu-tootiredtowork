import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { QUIZZES } from 'src/mocks/quiz.mock';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    quizzes: Quiz[];

    constructor(public configService: ConfigurationService, private quizService: QuizService) {
        this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
            this.quizzes = quizzes;
        });
    }

    ngOnInit() {
    }

    deleteQuiz(quiz: Quiz) {
        this.quizService.deleteQuiz(quiz);
    }
}