import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';
import { Theme } from 'src/models/theme.model';

import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

    @Input()
    theme: Theme;


    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {

    }

    ngOnInit(): void {
    }

    themeSelected() {
        this.quizService.themeSelected = this.theme;
        this.router.navigateByUrl("/quizlist");
    }


}