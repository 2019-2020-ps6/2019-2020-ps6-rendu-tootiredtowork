import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/models/answer.model';
import { ConfigurationService } from 'src/services/configuration.service';

/**
 * Component représentant une liste de réponses dans la page QuizGame
 */
@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
    _answerList: Answer[];

    @Input('answerList')
    set answerList(value: Answer[]) {
        this.shuffle(value);
        this._answerList = value;
    }

    @Output()
    answerSelected: EventEmitter<Answer> = new EventEmitter<Answer>();

    constructor(public configService: ConfigurationService) {
    }

    ngOnInit() {
    }

    answer(answer: Answer) {
        this.answerSelected.emit(answer);
    }

    /**
    * Shuffles array in place.
    * @param {Array} a items An array containing the items.
    */
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}