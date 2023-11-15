import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { QuizzComponent } from './Components/Quizz/quizz/quizz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
