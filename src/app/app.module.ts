import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './app.header';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConvertSpaces } from './MyPipe';
import { SearchSpaces } from './Search';
import { CounterComponent } from './components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { DetailedMusicComponent } from './components/detailed-music/detailed-music.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    FooterComponent,
    SectionComponent,
    ConvertSpaces,
    SearchSpaces,
    CounterComponent,
    AddMusicComponent,
    EditMusicComponent,
    NavComponent,
    DetailedMusicComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
