import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
    quiz: Quiz;

    constructor(public configService: ConfigurationService, public quizService: QuizService,public route: ActivatedRoute) {
    	this.quizService.setSelectedQuiz(this.route.snapshot.paramMap.get('id'));
    	this.quizService.quizSelected$.subscribe((quizSelected: Quiz) => {
            this.quiz = quizSelected;
        });
    }

    ngOnInit(): void {
        let input=document.querySelector("input");
        input.addEventListener("change",(e:Event )=>
            this.quizService.updateDifficulty(this.route.snapshot.paramMap.get('theme'),this.quiz, Number(input.value)));
    }

}