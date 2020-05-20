import { Answer } from './answer.model';

export interface Question {
    label: string;
    answers: Answer[];
}

/**
 * Renvoie la bonne reponse d'une question donnée
 * @param question - La question
 */
export function getCorrectAnswer(question: Question): Answer {
    var retour: Answer = null;
    question.answers.forEach((answer) => {
        if (answer.isCorrect) retour = answer;
    })
    return retour;
}