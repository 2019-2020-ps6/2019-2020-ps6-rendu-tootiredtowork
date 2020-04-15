import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';
import { Quiz } from 'src/models/quiz.model';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-editable-question',
    templateUrl: './editable-question.component.html',
    styleUrls: ['./editable-question.component.scss']
})
export class EditableQuestionComponent implements OnInit {

    @Input()
    question: Question;

    @Input()
    quiz: Quiz;


    constructor(private router: Router,public configService: ConfigurationService) {
    }

    ngOnInit() {
    }

    delete(){
    }

    questionSelected(){
        this.router.navigateByUrl('/editquiz/'+this.quiz.id+"/"+this.quiz.questions.indexOf(this.question));
    }
}