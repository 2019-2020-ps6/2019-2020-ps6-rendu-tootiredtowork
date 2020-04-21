import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Theme } from 'src/models/theme.model';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';

import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    themes: Theme[];

    constructor(public configService: ConfigurationService, private quizService: QuizService, private router: Router, private dialog: MatDialog) {
        this.quizService.themes$.subscribe((list_themes: Theme[]) => {
            this.themes = list_themes;
        });
    }

    ngOnInit() {
    }

    deleteQuiz(theme: Theme) {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteTheme(theme);
            }
        )
    }

    openDialog(): MatDialogRef<DeleteDialog, any> {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;
        dialogConfig.data = {text: "ce thème",title:" un Thème"};

        return this.dialog.open(DeleteDialog, dialogConfig);
    }

    addNewTheme() {
        this.router.navigateByUrl('/createtheme');
      }
}