import { Question } from './question.model';

export interface Quiz {
    id: string;
    difficulty: number;
    questions: Question[];
}