import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

import { Router } from '@angular/router';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';


import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { FillDialog } from 'src/app/dialogs/fill/fill-dialog.component';


@Component({
    selector: 'app-create-quiz',
    templateUrl: './create-quiz.component.html',
    styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

    constructor(public configService: ConfigurationService, public quizService: QuizService, private router: Router, private dialog: MatDialog) {

        this.quizService.themeSelected$.subscribe((theme) => {
            if (theme == null) this.router.navigateByUrl('/themelist');
        });
    }

    ngOnInit(): void {
    }

    openDialog(): MatDialogRef<FillDialog, any> {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;

        return this.dialog.open(FillDialog, dialogConfig);
    }

    addNewQuiz() {
        let input = document.body.querySelector("input");
        if (input.value == "") {
            this.openDialog();
            return;
        }
        this.quizService.selectQuiz({ "id": input.value, "difficulty": 1, questions: [] } as Quiz);
        this.quizService.addQuiz();
        this.router.navigateByUrl("/editquiz");
    }

}