import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/models/theme.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-editable-theme',
    templateUrl: './editable-theme.component.html',
    styleUrls: ['./editable-theme.component.scss']
})
export class EditableThemeComponent implements OnInit {

    @Input()
    theme: Theme;

    @Output()
    deleteQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();


    constructor(private router: Router, public configService: ConfigurationService,public quizService: QuizService) {
    }

    ngOnInit(): void {
    }

    themeSelected() {
        this.router.navigateByUrl('/edittheme/'+this.theme.id);
    }

    delete() {
        this.deleteQuiz.emit(this.theme);
    }
}