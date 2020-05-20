import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { Game } from 'src/models/game.model';
import { GameService } from 'src/services/game.service';

/**
 * Component de la page Result
 */
@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    game: Game;

    constructor(public configService: ConfigurationService, public gameService: GameService) {
        this.game = gameService.getGame();
    }

    ngOnInit() {
    }
}