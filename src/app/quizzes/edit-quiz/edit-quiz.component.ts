import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

import { ActivatedRoute, Router } from '@angular/router';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { Question } from 'src/models/question.model';


import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
    quiz: Quiz;


    public questionForm: FormGroup;

    

    constructor(public configService: ConfigurationService, public quizService: QuizService, private router: Router,public route: ActivatedRoute, private dialog: MatDialog) {
        if (quizService.quizSelected == null) this.router.navigateByUrl('/themelist');
        this.quiz = quizService.quizSelected;

    }

    ngOnInit(): void {
        let input = document.querySelector("input");
        input.addEventListener("change", (e: Event) =>
            this.quizService.updateDifficulty( Number(input.value)));


    }

    
    deleteQuiz(question: Question) {
        
        const dialogRef = this.openDialog();
        
        dialogRef.afterClosed().subscribe(
            
            result => {
                if (result) this.quizService.deleteQuestion(question);
            }
        )
    }

    addNewQuestion() {
        this.quizService.questionSelected = {} as Question;
        this.router.navigateByUrl('/editquestion');
      }
  
    
    openDialog(): MatDialogRef<DeleteDialog, any> {
        
        const dialogConfig = new MatDialogConfig();
  
        dialogConfig.disableClose = true;
  
        dialogConfig.autoFocus = true;
        dialogConfig.data = {text: "cette question",title:" une Question"};
  
        return this.dialog.open(DeleteDialog, dialogConfig);
    }

}