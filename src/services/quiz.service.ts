import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Theme } from '../models/theme.model';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private themes: Theme[];

  private quizzes: Quiz[];

  private questions: Question[];

  private theme: Theme;

  private quiz: Quiz;

  private question: Question;

  quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  quizSelected: Quiz;

  themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);

  themeSelected: Theme;

  questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  questionSelected: Question;

  score: number;

  private quizUrl = serverUrl + '/quizzes';


  constructor(private http: HttpClient) {
    this.selectAllThemes();
  }

  selectAllThemes() {
    this.http.get<Theme[]>(this.quizUrl).subscribe((themeList) => {
      this.themes = themeList;
      this.themes$.next(this.themes);

    });
  }

  selectAllQuizzesFromTheme(themeId: string) {
    const urlWithId = this.quizUrl + '/themequiz/' + themeId;
    this.http.get<Quiz[]>(urlWithId).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });

  }

  updateQuizz(theme: string, quiz: Quiz, question: Question, position: number) {
    const quizzUrl = this.quizUrl + '/' + theme + '/' + quiz.id;
    quiz.questions[position] = question;
    this.http.post<Quiz>(quizzUrl, quiz).subscribe(() => { this.quizSelected = quiz; this.selectAllQuizzesFromTheme(theme) });
  }


  updateTheme(theme: string, quiz: Quiz, position: number) {

  }

  updateDifficulty(theme: string, quiz: Quiz, difficulty: number) {
    const quizzUrl = this.quizUrl + '/' + theme + '/' + quiz.id;
    quiz.difficulty = difficulty;
    this.http.post<Quiz>(quizzUrl, quiz).subscribe(() => { this.quizSelected = quiz; this.selectAllQuizzesFromTheme(theme) });

  }

  deleteQuiz(quiz: Quiz) {
    const urlWithId = this.quizUrl + '/' + this.theme.id + "/" + quiz.id;
    var index = this.quizzes.indexOf(quiz);
    this.http.delete<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizzes.splice(index, 1);
      this.quizzes$.next(this.quizzes);

    });
    console.log(this.quizzes);
  }

  deleteTheme(theme: Theme) {
    const urlWithId = this.quizUrl + '/' + theme.id;
    var index = this.themes.indexOf(theme);
    this.http.delete<Theme>(urlWithId).subscribe((theme) => {
      this.themes.splice(index, 1);
      this.themes$.next(this.themes);

    });
  }

  deleteQuestion(question: Question) {
    const urlWithId = this.quizUrl + '/' + this.theme.id + "/" + this.quiz.id + "/" + question.label;
    var index = this.questions.indexOf(question);
    this.http.delete<Question>(urlWithId).subscribe((question) => {
      this.questions.splice(index, 1);
      this.questions$.next(this.questions);

    });
  }
  clear() {
    this.quizSelected = null;
    this.score = 0;
  }
}