import { Quiz } from './quiz.model';

export interface Theme {
    id: string;
    quizs: Quiz[];
}