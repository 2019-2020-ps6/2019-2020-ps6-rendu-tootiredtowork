import { Quiz } from 'src/models/quiz.model';

export const QUIZ: Quiz = {
    id: "QUIZ1",
    difficulty: 3,
    questions: [
        {
            label: "Question 1",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
        {
            label: "Question 2",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
    ]
};

export const QUIZ2: Quiz = {
    id: "QUIZ2",
    difficulty: 1,
    questions: [
        {
            label: "Question 1",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
        {
            label: "Question 2",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
    ]
};

export const QUIZ3: Quiz = {
    id: "QUIZ3",
    difficulty: 2,
    questions: [
        {
            label: "Question 1",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
        {
            label: "Question 2",
            answers: [
                {
                    value: "Réponse 1",
                    isCorrect: true
                },
                {
                    value: "Réponse 2",
                    isCorrect: false
                },
                {
                    value: "Réponse 3",
                    isCorrect: false
                },
                {
                    value: "Réponse 4",
                    isCorrect: false
                }
            ]
        },
    ]
};


export const QUIZZES: Quiz[] = [
    QUIZ,
    QUIZ2,
    QUIZ3
];