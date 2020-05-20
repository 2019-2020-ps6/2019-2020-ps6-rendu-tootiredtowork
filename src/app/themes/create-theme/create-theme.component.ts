import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/models/theme.model';

import { Router } from '@angular/router';

import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';


import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { FillDialog } from 'src/app/dialogs/fill/fill-dialog.component';

/**
 * Component de la page CreateTheme
 */
@Component({
    selector: 'app-create-theme',
    templateUrl: './create-theme.component.html',
    styleUrls: ['./create-theme.component.scss']
})
export class CreateThemeComponent implements OnInit {

    constructor(public configService: ConfigurationService, public quizService: QuizService, private router: Router, private dialog: MatDialog) {
        this.configService.previouspage = router.url;

    }

    ngOnInit(): void {
    }

    /**
     * Ouvre un dialog indiquant que des champs sont manquants.
     */
    openDialog(): MatDialogRef<FillDialog, any> {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;

        return this.dialog.open(FillDialog, dialogConfig);
    }

    /**
     * Méthode appelée lorsque l'utilisateur confirme la création.
     */
    addNewTheme() {
        let input = document.body.querySelector("input");
        if (input.value == "") {
            this.openDialog();
            return;
        }
        this.quizService.selectTheme({ "id": input.value, quizs: [] } as Theme);
        this.quizService.addTheme();
        this.router.navigateByUrl("/edittheme");
    }

}