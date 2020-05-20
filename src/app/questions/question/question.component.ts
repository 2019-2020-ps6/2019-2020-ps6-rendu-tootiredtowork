import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';

import { ConfigurationService } from 'src/services/configuration.service';

/**
 * Component représentant une question et ses réponses dans la page QuizGame
 */
@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    @Input()
    question: Question;

    @Output()
    answered: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor(public configService: ConfigurationService) {
    }

    ngOnInit() {
    }

    /**
     * Méthode appelée lorsque l'utilisateur choisis sa réponse.
     * @param answer 
     */
    answerSelected(answer: Answer) {
        this.answered.emit(answer);
    }
}