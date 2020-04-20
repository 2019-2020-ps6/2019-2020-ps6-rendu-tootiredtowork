import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';
import { ThemeComponent } from '../theme/theme.component';

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
    themes: Theme[];

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {
        this.quizService.themes$.subscribe((list_themes: Theme[]) => {
            this.themes = list_themes;
        });
    }

    ngOnInit() {
    }

    getComponent(): Type<ThemeComponent> {
        return ThemeComponent
    }

    getMock(): Theme {
        return {
            id: "THEME1",
            quizs: [
                {
                    id: "QUIZ1",
                    difficulty: 3,
                    questions: [
                        {
                            label: "Question 1",
                            answers: [
                                {
                                    value: "Réponse 1",
                                    isCorrect: true
                                },
                                {
                                    value: "Réponse 2",
                                    isCorrect: false
                                },
                                {
                                    value: "Réponse 3",
                                    isCorrect: false
                                },
                                {
                                    value: "Réponse 4",
                                    isCorrect: false
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}