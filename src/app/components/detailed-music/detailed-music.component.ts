import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MusicService } from 'src/app/utility/music.service';
import {music} from '../section/music';
@Component({
  selector: 'app-detailed-music',
  templateUrl: './detailed-music.component.html',
  styleUrls: ['./detailed-music.component.scss']
})
export class DetailedMusicComponent implements OnInit {
id:any;
musics:music[];
music:any;
  constructor(private router:ActivatedRoute,private musicServ:MusicService) {
this.musics=musicServ.getMusic();
    this.router.paramMap.subscribe((p:ParamMap)=>
    {
this.id=p.get("mId");
    })
    this.music=this.musics.find((m)=> m.mId==this.id)
   }

  ngOnInit(): void {
  }

}
