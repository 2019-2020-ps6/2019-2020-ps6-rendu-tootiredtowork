import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DeleteDialog } from './dialogs/delete/delete-dialog.component';
import { FillDialog } from './dialogs/fill/fill-dialog.component';
import { ReviewComponent } from './review/review.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { CreateQuizComponent } from './quizzes/create-quiz/create-quiz.component';
import { CreateThemeComponent } from './themes/create-theme/create-theme.component';
import { EditableQuestionComponent } from './questions/editable-question/editable-question.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ThemeComponent } from './themes/theme/theme.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { EditableThemeComponent } from './themes/editable-theme/editable-theme.component';
import { EditQuizListComponent } from './quizzes/edit-quizlist/edit-quizlist.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselAddComponent } from './carousel/carousel-add/carousel-add.component';

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
    DeleteDialog,
    ReviewComponent,
    EditQuizComponent,
    EditableQuestionComponent,
    EditQuestionComponent,
    CarouselComponent, ThemeComponent,
    ThemeListComponent,
    EditableThemeComponent,
    EditQuizListComponent,
    CarouselItemDirective,
    FillDialog,
    CreateQuizComponent,
    CreateThemeComponent,
    CarouselAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
