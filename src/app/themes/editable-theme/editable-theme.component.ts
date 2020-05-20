import { Component, OnInit, Input } from '@angular/core';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { CarouselItemComponent } from 'src/app/carousel/carousel-item.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';

@Component({
    selector: 'app-editable-theme',
    templateUrl: './editable-theme.component.html',
    styleUrls: ['./editable-theme.component.scss']
})
export class EditableThemeComponent implements OnInit, CarouselItemComponent {

    @Input()
    data: Theme;


    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    themeSelected() {
        this.quizService.selectTheme(this.data);
        this.router.navigateByUrl('/editquizlist');
    }

    delete() {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteTheme(this.data);
            }
        )
    }

    openDialog(): MatDialogRef<DeleteDialog, any> {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;
        dialogConfig.data = { text: "ce thème", title: " un Thème" };

        return this.dialog.open(DeleteDialog, dialogConfig);
    }

    getWhiteSpaceString() {
        var retour: String = "";
        for (var i = 0; i < 21; i++) {
            retour = retour.concat(" ");
        }
        return retour;
    }
}