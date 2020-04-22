import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';
import { Theme } from 'src/models/theme.model';

import { QuizService } from 'src/services/quiz.service';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { CarouselItemComponent } from 'src/app/carousel/carousel-item.component';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit, CarouselItemComponent {

    @Input()
    data: Theme;


    constructor(private router: Router, public configService: ConfigurationService, public quizService: QuizService) {

    }

    ngOnInit(): void {
    }

    themeSelected() {
        this.quizService.themeSelected = this.data;
        this.router.navigateByUrl("/quizlist");
    }

    getWhiteSpaceString() {
        var retour: String = "";
        for (var i = 0; i < 21; i++) {
            retour = retour.concat(" ");
        }
        return retour;
    }
}