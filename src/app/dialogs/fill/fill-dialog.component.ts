import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-fill-dialog',
    templateUrl: './fill-dialog.component.html',
    styleUrls: ['./fill-dialog.component.scss']
})

//pour remplir tout les champs pour creer un element
export class FillDialog {
    constructor(public dialogRef: MatDialogRef<FillDialog>) { }

    closeDialog() {
    	this.dialogRef.close();
    }
}