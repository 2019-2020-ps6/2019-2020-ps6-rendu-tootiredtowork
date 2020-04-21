import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizGameComponent } from './quizzes/quiz-game/quiz-game.component';
import { ResultComponent } from './results/result/result.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditThemeComponent } from './themes/edit-theme/edit-theme.component';
import { ReviewComponent } from './review/review.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { EditQuizListComponent } from './quizzes/edit-quizlist/edit-quizlist.component';
import { CreateQuizComponent } from './quizzes/create-quiz/create-quiz.component';
import { CreateThemeComponent } from './themes/create-theme/create-theme.component';




const routes: Routes = [
  { path: 'quizgame', component: QuizGameComponent },
  { path: 'result', component: ResultComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'themelist', component: ThemeListComponent },
  { path: 'quizlist', component: QuizListComponent },
  { path: 'edittheme', component: EditThemeComponent },
  { path: 'editquizlist', component: EditQuizListComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'createquiz', component: CreateQuizComponent },
  { path: 'createtheme', component: CreateThemeComponent },
  { path: 'editquiz', component: EditQuizComponent },
  { path: 'editquestion', component: EditQuestionComponent },
  { path: '', redirectTo: '/configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
