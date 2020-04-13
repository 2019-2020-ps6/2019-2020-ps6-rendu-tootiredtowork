import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';

import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-editable-question',
    templateUrl: './editable-question.component.html',
    styleUrls: ['./editable-question.component.scss']
})
export class EditableQuestionComponent implements OnInit {

    @Input()
    question: Question;

    constructor(public configService: ConfigurationService) {
    }

    ngOnInit() {
    }

    delete(){

    }

    questionSelected(){
        
    }
}