import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../models/theme.model';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { serverUrl } from '../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private themes: Theme[];

  private quizzes: Quiz[];

  private questions: Question[];

  quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  private quizSelected: Quiz;
  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizSelected);

  themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);

  private themeSelected: Theme;
  public themeSelected$: BehaviorSubject<Theme> = new BehaviorSubject(this.themeSelected);

  questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  private questionSelected: Question;
  public questionSelected$: BehaviorSubject<Question> = new BehaviorSubject(this.questionSelected);

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

  getAllThemes() {
    return this.themes;
  }

  selectAllQuizzesFromTheme(themeId: string) {
    const urlWithId = this.quizUrl + '/themequiz/' + themeId;
    this.http.get<Quiz[]>(urlWithId).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });

  }

  updateQuizz(question: Question) {
    const quizzUrl = this.quizUrl + '/' + this.themeSelected.id + '/' + this.quizSelected.id;
    let position = this.quizSelected.questions.indexOf(this.questionSelected);
    if (position == -1) {
      this.quizSelected.questions.push(question);
    } else {
      this.quizSelected.questions[position] = question;
    }
    this.http.post<Quiz>(quizzUrl, this.quizSelected).subscribe(() => { this.selectAllQuizzesFromTheme(this.themeSelected.id) });
  }

  updateDifficulty(difficulty: number, theme: Theme) {
    const quizzUrl = this.quizUrl + '/' + theme.id + '/' + this.quizSelected.id;
    this.quizSelected.difficulty = difficulty;
    this.http.post<Quiz>(quizzUrl, this.quizSelected).subscribe(() => { this.selectAllQuizzesFromTheme(this.themeSelected.id) });

  }

  updateQuizzTheme(previoustheme: Theme, newtheme: Theme) {
    this.deleteQuiz2(this.quizSelected, previoustheme);
    this.addQuiz2(newtheme);


  }

  deleteQuiz(quiz: Quiz) {
    if (this.themeSelected != null) this.deleteQuiz2(quiz, this.themeSelected);
  }

  private deleteQuiz2(quiz: Quiz, theme: Theme) {
    const urlWithId = this.quizUrl + '/' + theme.id + "/" + quiz.id;
    this.quizzes = theme.quizs;
    var index = this.quizzes.indexOf(quiz);

    this.http.delete<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizzes.splice(index, 1);
      theme.quizs = this.quizzes;
      this.quizzes$.next(this.quizzes);
      this.themeSelected$.next(theme);

    });

  }

  addQuiz() {
    if (this.themeSelected != null) this.addQuiz2(this.themeSelected);
  }

  private addQuiz2(theme: Theme) {
    const urlWithId = this.quizUrl + '/' + theme.id + "/add";


    this.http.post<Quiz>(urlWithId, this.quizSelected).subscribe(() => {
      this.quizzes = theme.quizs;
      this.quizzes.push(this.quizSelected);
      this.quizzes$.next(this.quizzes);
    });

  }

  addTheme() {
    const urlWithId = this.quizUrl + "/add";
    this.http.post<Theme>(urlWithId, this.themeSelected).subscribe(() => {
      this.themes.push(this.themeSelected);
      this.themes$.next(this.themes);
    });
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
    this.questions = this.quizSelected.questions;
    const urlWithId = this.quizUrl + '/' + this.themeSelected.id + "/" + this.quizSelected.id + "/" + this.questions.indexOf(question);

    var index = this.questions.indexOf(question);

    this.http.delete<Question>(urlWithId).subscribe((question) => {
      this.questions.splice(index, 1);
      this.questions$.next(this.questions);
      this.quizSelected.questions = this.questions;
      this.quizSelected$.next(this.quizSelected);
    });
  }

  selectTheme(theme: Theme) {
    this.themeSelected = theme;
    this.themeSelected$.next(theme);
    console.log("SELECT THEME", this.themeSelected);
  }

  selectQuiz(quiz: Quiz) {
    this.quizSelected = quiz;
    this.quizSelected$.next(quiz);
  }

  selectQuestion(question: Question) {
    this.questionSelected = question;
    this.questionSelected$.next(question);
  }
}