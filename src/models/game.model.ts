import { Quiz } from './quiz.model';

export interface Game {
    quiz: Quiz;
    score: number;
}