import { Component, OnInit, Type } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/quiz.service';

import { Router } from '@angular/router';
import { EditableThemeComponent } from '../editable-theme/editable-theme.component';

/**
 * Component de la page EditTheme
 */
@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    themes: Theme[];

    /**
     * Attribut nécessaire pour le carousel.
     * Méthode d'ajout.
     */
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
        this.configService.previouspage = router.url;

    }

    ngOnInit() {
    }

    /**
    * Méthode nécessaire pour le carousel
    * Renvoie le type de component avec lequel représenter les items du carousel.
    */
    getComponent(): Type<EditableThemeComponent> {
        return EditableThemeComponent;
    }

    /**
    * Méthode nécessaire pour le carousel.
    * Renvoie une donnée test.
    */
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

    /**
     * Méthode nécessaire pour le carousel.
     * Méthode appelé lorsqu'un utilisateur clique sur le "plus" du carousel.
     */
    addNewTheme() {
        this.router.navigateByUrl('/createtheme');
    }
}