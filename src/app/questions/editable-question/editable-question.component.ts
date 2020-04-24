import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';
import { Quiz } from 'src/models/quiz.model';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';

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

    @Output()
    deleteQuiz: EventEmitter<Question> = new EventEmitter<Question>();


    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {
    }

    ngOnInit() {
    }

    delete() {

        this.deleteQuiz.emit(this.question);
    }

    questionSelected() {
        this.quizService.selectQuestion(this.question);
        this.router.navigateByUrl('/editquestion');
    }
}