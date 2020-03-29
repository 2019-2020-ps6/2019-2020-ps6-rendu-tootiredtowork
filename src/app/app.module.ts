import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuizGameComponent } from './quizzes/quiz-game/quiz-game.component';
import { QuestionComponent } from './questions/question/question.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';

import { ConfigurationComponent } from './configuration/configuration.component';
import { ResultComponent } from './results/result/result.component';
import { ColorPickerComponent } from './colorPicker/colorPicker.component';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    QuizGameComponent,
    QuestionComponent,
    AnswerListComponent,
    ConfigurationComponent,
    ResultComponent,
    QuizListComponent,
    QuizComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
