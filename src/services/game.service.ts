import { Game } from 'src/models/game.model';
import { Quiz } from 'src/models/quiz.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private game: Game;

    public setGame(quiz: Quiz, score: number) {
        this.game = {
            quiz,
            score
        }
    }

    public getGame() {
        return this.game;
    }
}