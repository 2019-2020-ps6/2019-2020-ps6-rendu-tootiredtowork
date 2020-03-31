import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-delete-quiz-dialog',
    templateUrl: './delete-quiz-dialog.component.html',
    styleUrls: ['./delete-quiz-dialog.component.scss']
})
export class DeleteQuizDialog {
    constructor(public dialogRef: MatDialogRef<DeleteQuizDialog>) { }

    closeDialog() {
        this.dialogRef.close('Pizza!');
    }
}