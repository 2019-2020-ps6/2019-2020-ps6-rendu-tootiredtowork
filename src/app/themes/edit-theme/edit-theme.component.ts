import { Component, OnInit, Type } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/quiz.service';

import { Router } from '@angular/router';
import { EditableThemeComponent } from '../editable-theme/editable-theme.component';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    themes: Theme[];

    add: Function;

    constructor(public configService: ConfigurationService, private quizService: QuizService, private router: Router) {
        this.quizService.themes$.subscribe((list_themes: Theme[]) => {
            if (list_themes != null) {
                this.themes = new Array<Theme>();
                list_themes.forEach((t) => {
                    this.themes.push(t);
                });
            }
        });
        this.add = this.addNewTheme.bind(this);
    }

    ngOnInit() {
    }

    getComponent(): Type<EditableThemeComponent> {
        return EditableThemeComponent;
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

    addNewTheme() {
        this.router.navigateByUrl('/createtheme');
    }
}