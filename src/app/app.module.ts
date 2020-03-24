import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuizComponent } from './quizzes/quiz/quiz.component';
import { QuestionComponent } from './questions/question/question.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';

import { ConfigurationComponent } from './configuration/configuration.component';

import { ResultComponent } from './results/result/result.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    AnswerListComponent,
    ConfigurationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
