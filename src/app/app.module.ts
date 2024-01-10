import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavLeftComponent } from './shared/nav-left/nav-left.component';
import { ChatResultComponent } from './shared/chat-result/chat-result.component';
import { FormsModule } from '@angular/forms';
import { FeatureComponent } from './shared/feature/feature.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { SumComponent } from './sum/sum.component';
import { SharedComponent } from './shared/shared.component';
import { QuizizzComponent } from './quizizz/quizizz.component';
import { QaComponent } from './qa/qa.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavLeftComponent,
    ChatResultComponent,
    FeatureComponent,
    SumComponent,
    SharedComponent,
    QuizizzComponent,
    QaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
