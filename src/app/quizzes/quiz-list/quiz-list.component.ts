import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
    theme: Theme;

    constructor(public configService: ConfigurationService,public route: ActivatedRoute, public quizService: QuizService) {
        this.quizService.setSelectedTheme(this.route.snapshot.paramMap.get('id'));
        this.quizService.themeSelected$.subscribe((theme: Theme) => {
            this.theme = theme;
        });
    }

    ngOnInit() {
    }
}