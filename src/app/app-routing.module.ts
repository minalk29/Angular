import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { SectionComponent } from './components/section/section.component';
import { DetailedMusicComponent } from './components/detailed-music/detailed-music.component';

const routes: Routes = [{path:'editmusic/:mId',component:EditMusicComponent},
{path:'addmusic',component:AddMusicComponent},
{path:'musiclist',component:SectionComponent},
{path:'deleting/:mId',component:SectionComponent},
{path:'detail/:mId',component:DetailedMusicComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
