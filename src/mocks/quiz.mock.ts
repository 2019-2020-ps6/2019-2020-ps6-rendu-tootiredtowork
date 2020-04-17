import { Theme } from 'src/models/theme.model';
import { Quiz } from 'src/models/quiz.model';

export const THEME1: Theme = {
    id: "THEME1",
    quizs: [
        {
            id: "QUIZ1-1",
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
        },
        {
            id: "QUIZ1-2",
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
        }
    ]
};

export const THEME2: Theme = {
    id: "THEME2",
    quizs: [
        {
            id: "QUIZ2-1",
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
        },
        {
            id: "QUIZ2-2",
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
        }
    ]
};


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


export const THEMES: Theme[] = [
    THEME1,
    THEME2
];
