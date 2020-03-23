import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/models/answer.model';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    score=0;
    
    @Input()
    correctAnswers: Number;

    @Input()
    totalAnswers: Number;
    
    @Output()
    updated: EventEmitter<Number> = new EventEmitter<Number>();

    
    

    constructor() {
    }

    ngOnInit() {
    }

    scoreUpdate(answer: Answer) {
        if (answer.isCorrect) {
            this.score++;
        } 
        this.updated.emit(this.score);
    }

     
}