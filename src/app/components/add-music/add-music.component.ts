import { Component, OnInit } from '@angular/core';
import {music} from '../section/music';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  musiclist:any;
  date:Date=new Date();

  constructor() { 
    this.musiclist={mName:"Perfect",singer:"Ed Sheeran"}
  }

  ngOnInit(): void {
  }
getMusic()
{
 
  alert("done");
}
}
