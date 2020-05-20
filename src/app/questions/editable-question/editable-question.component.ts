import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Answer } from 'src/models/answer.model';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { CarouselItemComponent } from 'src/app/carousel/carousel-item.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialog } from 'src/app/dialogs/delete/delete-dialog.component';

/**
 * Component représentant une question éditable dans la page EditQuiz
 */
@Component({
    selector: 'app-editable-question',
    templateUrl: './editable-question.component.html',
    styleUrls: ['./editable-question.component.scss']
})
export class EditableQuestionComponent implements OnInit, CarouselItemComponent {

    @Input()
    data: Question;

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService, private dialog: MatDialog) {
        console.log("FIN CONSTRUCTEUR EDITABLE QUESTION");
    }

    ngOnInit() {
        console.log("INIT EDITABLE QUESTION");
    }

    /**
     * Méthode appelée lorsque l'utilisateur demande la suppression.
     */
    delete() {
        const dialogRef = this.openDialog();
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) this.quizService.deleteQuestion(this.data);
            }
        )
    }

    /**
     * Ouvre un dialog pour demander la confirmation de la suppression
     */
    openDialog(): MatDialogRef<DeleteDialog, any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;

        dialogConfig.autoFocus = true;
        dialogConfig.data = { text: "cette question", title: " une Question" };

        return this.dialog.open(DeleteDialog, dialogConfig);
    }

    /**
     * Méthode appelée lorsque l'utilisateur à sélectionner la question
     */
    questionSelected() {
        this.quizService.selectQuestion(this.data);
        this.router.navigateByUrl('/editquestion');
    }

    /**
    * Renvoie une chaine de 21 espaces.
    * (Utilisée pour avoir une taille fixe)
    */
    getWhiteSpaceString() {
        var retour: String = "";
        for (var i = 0; i < 21; i++) {
            retour = retour.concat(" ");
        }
        return retour;
    }

    /**
     * Renvoie une chaine fixe représentant le label de la question.
     * Si la chaine dépasse 21 caractères, les 3 derniers sont remplacés par "..."
     */
    getLabelString(): string {
        if (this.data.label.length > 21) {
            return this.data.label.substring(0, 17) + "...";
        }
        else return this.data.label;
    }

    /**
    * Renvoie une chaine fixe représentant la bonne réponse de la question.
    * Si la chaine dépasse 20 caractères, les 3 derniers sont remplacés par "..."
    */
    getReponseString(reponse: Answer): string {
        if (reponse.value.length > 20) {
            return reponse.value.substring(0, 16) + "...";
        }
        else {
            return reponse.value;
        }
    }
}