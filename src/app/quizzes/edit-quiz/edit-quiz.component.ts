import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

import { ActivatedRoute, Router } from '@angular/router';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { Question } from 'src/models/question.model';
import { Theme } from 'src/models/theme.model';

import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EditableQuestionComponent } from 'src/app/questions/editable-question/editable-question.component';


@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
    quiz: Quiz;
    questions: Question[];
    previousTheme: Theme;

    add: Function;

    public questionForm: FormGroup;

    constructor(public configService: ConfigurationService, public quizService: QuizService, private router: Router, public route: ActivatedRoute, private dialog: MatDialog) {
        this.quizService.quizSelected$.subscribe((quiz) => {
            if (quiz == null) this.router.navigateByUrl('/themelist');
            else {
                this.quiz = quiz;
                this.questions = new Array<Question>();
                this.quiz.questions.forEach((question) => {
                    this.questions.push(question);
                });
            }
        });
        this.quizService.themeSelected$.subscribe((theme) => {
            if (theme == null) this.router.navigateByUrl('/themelist');
            else {
                this.previousTheme = theme;
            }
        });
        this.add = this.addNewQuestion.bind(this);
    }

    ngOnInit(): void {
        this.fillThemeName();
    }

    changeValue() {
        let input = document.querySelector("input");
        if (Number(input.value) > 3) {
            input.value = "3";
        }
        if (Number(input.value) < 1) {
            input.value = "1";
        }

        this.quizService.updateDifficulty(Number(input.value));
    }

    changeTheme() {
        let select = document.querySelector("select");
        this.quizService.updateQuizzTheme(this.previousTheme, this.quizService.getAllThemes().find(theme => theme.id == select.value));
        this.previousTheme = this.quizService.getAllThemes().find(theme => theme.id == select.value)

    }

    fillThemeName() {
        let select = document.querySelector("select");
        let themesWithoutCurrent = this.quizService.getAllThemes().filter(theme => theme.id != this.previousTheme.id);
        select.innerHTML += "<option>" + this.previousTheme.id + "</option>";
        for (let theme of themesWithoutCurrent) {
            select.innerHTML += "<option>" + theme.id + "</option>";
        }

    }

    addNewQuestion() {
        this.quizService.selectQuestion({} as Question);
        this.router.navigateByUrl('/editquestion');
    }

    getComponent(): Type<EditableQuestionComponent> {
        return EditableQuestionComponent;
    }

    getMock(): Question {
        return {
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
    }
}