import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/models/theme.model';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteQuizDialog } from 'src/app/dialogs/delete-quiz/delete-quiz-dialog.component';

@Component({
    selector: 'app-edit-quizlist',
    templateUrl: './edit-quizlist.component.html',
    styleUrls: ['./edit-quizlist.component.scss']
})
export class EditQuizListComponent implements OnInit {
    theme: Theme;
    quizzes: Quiz[];

    constructor(public configService: ConfigurationService,public route: ActivatedRoute, private quizService: QuizService, private dialog: MatDialog) {
        this.quizService.setSelectedTheme(this.route.snapshot.paramMap.get('theme'));
        this.quizService.themeSelected$.subscribe((theme: Theme) => {
            this.theme = theme;
        });
        this.quizService.selectAllQuizzesFromTheme(this.route.snapshot.paramMap.get('theme'));
        this.quizService.quizzes$.subscribe((quiz: Quiz[]) => {
            this.quizzes = quiz;
        });
    }

    ngOnInit(): void {
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