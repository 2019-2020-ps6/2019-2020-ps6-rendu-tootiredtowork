import { MatDialogRef } from '@angular/material/dialog';
import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeleteDialog>) { }

    closeDialog() {
        this.dialogRef.close('Pizza!');
    }
}