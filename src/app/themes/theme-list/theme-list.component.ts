import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
    themes: Theme[];

    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {
        this.quizService.themes$.subscribe((list_themes: Theme[]) => {
            this.themes = list_themes;
        });
    }

    ngOnInit() {
    }
}