import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { ResultComponent } from './results/result.component';
import { ConfigurationComponent } from './configuration/configuration.component';




const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '', redirectTo: '/configuration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
