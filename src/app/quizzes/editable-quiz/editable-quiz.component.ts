import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';
import { CarouselItemComponent } from 'src/app/carousel/carousel-item.component';

@Component({
    selector: 'app-editable-quiz',
    templateUrl: './editable-quiz.component.html',
    styleUrls: ['./editable-quiz.component.scss']
})
export class EditableQuizComponent implements OnInit, CarouselItemComponent {
    faStar = faStar;

    @Input()
    data: Quiz;


    stars: number[] = [];

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        for (var i = 0; i < this.data.difficulty; i++) {
            this.stars.push(i);
        }
    }

    quizSelected() {
        this.quizService.selectQuiz(this.data);
        this.router.navigateByUrl('/editquiz');
    }

    delete() {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteQuiz(this.data);
            }
        )
    }

    openDialog(): MatDialogRef<DeleteDialog, any> {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;
        dialogConfig.data = { text: "ce quiz", title: " un Quiz" };

        return this.dialog.open(DeleteDialog, dialogConfig);
    }

    getQuestionNumberString(): String {
        if (this.data.questions.length == 1) {
            return ":   ".concat(this.data.questions.length.toString());
        }
        else if (this.data.questions.length < 10) {
            return "s:  ".concat(this.data.questions.length.toString());
        }
        else {
            return "s: ".concat(this.data.questions.length.toString());
        }
    }
}