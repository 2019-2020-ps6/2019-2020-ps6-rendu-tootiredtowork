import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/answer.model';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { FillDialog } from 'src/app/dialogs/fill/fill-dialog.component';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  quiz: Quiz;

  question: Question;

  public questionForm: FormGroup;




  constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService, public route: ActivatedRoute, private dialog: MatDialog, public formBuilder: FormBuilder) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      if (quiz == null) this.router.navigateByUrl('/themelist');
      else {
        this.quiz = quiz;
      }
    });
    this.quizService.questionSelected$.subscribe((question) => {
      if (question == null) this.router.navigateByUrl('/themelist');
      else {
        this.question = question;
      }
    })
    this.initializeQuestionForm();
    this.configService.previouspage=router.url;

  }

  ngOnInit() {
    let form = document.body.querySelector("form");
    form.addEventListener("submit", (e: Event) => this.addQuestion());
  }
  private initializeQuestionForm() {

    if (this.question.label == null) {
      this.questionForm = this.formBuilder.group({
        label: "",
        answers: this.formBuilder.array([])
      });
      this.addAnswer({ "value": "", "isCorrect": true });
      for (var i = 0; i < 3; ++i) {
        this.addAnswer({ "value": "", "isCorrect": false });
      }
    } else {
      this.questionForm = this.formBuilder.group({
        label: [this.question.label],
        answers: this.formBuilder.array([])
      });
      for (var i = 0; i < 4; ++i) {
        this.addAnswer(this.question.answers[i]);
      }
    }

  }

  private createAnswer(answer: Answer) {
    return this.formBuilder.group({
      value: answer.value,
      isCorrect: answer.isCorrect,
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  addAnswer(answer: Answer) {
    this.answers.push(this.createAnswer(answer));
  }


  addQuestion() {
    const question = this.questionForm.getRawValue() as Question;
    if (question.label == "") {
      this.openDialog();
      return;
    }
    for (let entry of this.answers.getRawValue()) {
      if (entry.value == "") {
        this.openDialog();
        return;
      }
    }
    this.quizService.updateQuizz(question);
    this.router.navigateByUrl("/editquiz");
  }

  openDialog(): MatDialogRef<FillDialog, any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.autoFocus = true;
    dialogConfig.data = { text: "ce quiz", title: " un Quiz" };

    return this.dialog.open(FillDialog, dialogConfig);
  }
}