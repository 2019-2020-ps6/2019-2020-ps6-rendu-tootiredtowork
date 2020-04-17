import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteQuizDialog } from 'src/app/dialogs/delete-quiz/delete-quiz-dialog.component';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    themes: Theme[];

    constructor(public configService: ConfigurationService, private quizService: QuizService, private dialog: MatDialog) {
        this.quizService.themes$.subscribe((list_themes: Theme[]) => {
            this.themes = list_themes;
        });
    }

    ngOnInit() {
    }


/// a mettre pour que ca soit ecrit theme au lieu de quiz
    deleteQuiz(theme: Theme) {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteTheme(theme);
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