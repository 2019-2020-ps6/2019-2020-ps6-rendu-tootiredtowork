import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { QUIZZES } from 'src/mocks/quiz.mock';
import { Quiz } from 'src/models/quiz.model';

@Component({
    selector: 'app-edit-theme',
    templateUrl: './edit-theme.component.html',
    styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

    quizzes: Quiz[] = QUIZZES;

    constructor(public configService: ConfigurationService) {
    }

    ngOnInit() {
    }
}