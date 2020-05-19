import { MatDialogRef } from '@angular/material/dialog';
import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeleteDialog>, public configService: ConfigurationService) { }

    closeDialog() {
        this.dialogRef.close('Pizza!');
    }
}