import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/answer.model';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteQuizDialog } from 'src/app/dialogs/delete-quiz/delete-quiz-dialog.component';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  quiz: Quiz;

  question: Question;

  public questionForm: FormGroup;


    

  constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService, public route: ActivatedRoute, public formBuilder: FormBuilder, private dialog: MatDialog) {


    if (quizService.quizSelected == null) this.router.navigateByUrl('/themelist');
    this.quiz = quizService.quizSelected;
    this.question = this.quiz.questions[this.route.snapshot.paramMap.get('number')];
    this.initializeQuestionForm();

  }

  ngOnInit() {
    let form = document.body.querySelector("form");
    form.addEventListener("submit", (e: Event) => this.addQuestion());
  }
  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: [this.question.label],
      answers: this.formBuilder.array([])
    });
    for (var i = 0; i < 4; ++i) {
      this.addAnswer(this.question.answers[i]);
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
      this.quizService.updateQuizz(this.route.snapshot.paramMap.get('theme'),this.quiz, question, Number(this.route.snapshot.paramMap.get('number')));
      this.router.navigateByUrl("/edittheme/"+this.route.snapshot.paramMap.get('theme')+"/"+this.route.snapshot.paramMap.get('id'));
    }

    
    deleteQuiz(question: Question) {
      const dialogRef = this.openDialog();
      dialogRef.afterClosed().subscribe(
          result => {
              if (result) this.quizService.deleteQuestion(question);
          }
      )
    }

  
  openDialog(): MatDialogRef<DeleteQuizDialog, any> {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;

      dialogConfig.autoFocus = true;

      return this.dialog.open(DeleteQuizDialog, dialogConfig);

  

  }
}