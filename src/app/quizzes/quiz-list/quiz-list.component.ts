import { Component, OnInit, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';
import { QuizComponent } from '../quiz/quiz.component';
import { Quiz } from 'src/models/quiz.model';

/**
 * Component de la page QuizList
 */
@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
    theme: Theme;

    constructor(private router: Router, public configService: ConfigurationService, public route: ActivatedRoute, public quizService: QuizService) {
        this.quizService.themeSelected$.subscribe((theme) => {
            if (theme == null) this.router.navigateByUrl('/themelist');
            else this.theme = theme;
        });
        this.configService.previouspage = router.url;

    }

    ngOnInit() {
    }

    /**
    * Méthode nécessaire pour le carousel.
    * Renvoie une donnée test.
    */
    getMock(): Quiz {
        return {
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
        };
    }

    /**
    * Méthode nécessaire pour le carousel
    * Renvoie le type de component avec lequel représenter les items du carousel.
    */
    getComponent(): Type<QuizComponent> {
        return QuizComponent;
    }
}