import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteQuizDialog } from 'src/app/dialogs/delete-quiz/delete-quiz-dialog.component';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    quizzes: Quiz[];

    constructor(public configService: ConfigurationService, private quizService: QuizService, private dialog: MatDialog) {
        this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
            this.quizzes = quizzes;
        });
    }

    ngOnInit() {
    }

    deleteQuiz(quiz: Quiz) {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteQuiz(quiz);
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