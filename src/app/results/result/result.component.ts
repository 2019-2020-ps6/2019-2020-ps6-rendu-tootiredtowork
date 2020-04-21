import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Game } from 'src/models/game.model';
import { GameService } from 'src/services/game.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    game: Game;

    constructor( public configService: ConfigurationService, public gameService: GameService) {
        this.game = gameService.getGame();
    }

    ngOnInit() {
    }
}