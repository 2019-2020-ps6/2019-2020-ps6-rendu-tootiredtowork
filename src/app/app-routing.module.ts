import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizGameComponent } from './quizzes/quiz-game/quiz-game.component';
import { ResultComponent } from './results/result/result.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditThemeComponent } from './themes/edit-theme/edit-theme.component';
import { ReviewComponent } from './review/review.component';




const routes: Routes = [
  { path: 'quizgame', component: QuizGameComponent },
  { path: 'result', component: ResultComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'quizlist', component: QuizListComponent },
  { path: 'edittheme', component: EditThemeComponent },
  { path: 'review', component: ReviewComponent },
  { path: '', redirectTo: '/configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
