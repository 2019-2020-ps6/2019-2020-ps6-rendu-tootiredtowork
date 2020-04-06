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
import { EditThemeComponent } from './themes/edit-theme/edit-theme.component'
import { ConfigurationComponent } from './configuration/configuration.component';
import { ResultComponent } from './results/result/result.component';
import { ColorPickerComponent } from './colorPicker/colorPicker.component';
import { EditableQuizComponent } from './quizzes/editable-quiz/editable-quiz.component';
import { DeleteQuizDialog } from './dialogs/delete-quiz/delete-quiz-dialog.component';
import { ReviewComponent } from './review/review.component';

import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatDialogModule } from "@angular/material/dialog";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    ColorPickerComponent,
    EditThemeComponent,
    EditableQuizComponent,
    DeleteQuizDialog,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
