import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {music} from '../section/music';
import { Howl } from 'howler';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/utility/music.service';
// import { Howl } from "../../../../node_modules/";
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit,OnChanges,OnDestroy {
musiclist:music[]
showImage:boolean=false
buttonName:any='show Images'
playlist:string="party playlist"

displayedColumns: string[] = ['Id', 'Name', 'Singer', 'Rating','','','Release Date'];

  constructor( private router:Router,private musicserv:MusicService) {
    this.musiclist=musicserv.getMusic();
   }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("on Changes");
  }
  ngOnDestroy(): void {
    console.log("on Delete");
  }
  public audio=new Audio();
   public isPlaying:boolean=false;
  play=(source:string)=>{
  this.audio.src = source;
  this.audio.load();
  this.audio.play();
  this.isPlaying=!this.isPlaying;
  }
  pause=(source:string)=>{
    
  }
  stop=()=>{
    this.isPlaying=!this.isPlaying;
    this.audio.pause();
  }
 navigation(id:number)
 {
   console.log("deleted"+id)
  this.router.navigate(["deleting",id]);
 }
buttonClicked=()=>
{
  this.showImage=!this.showImage;

  if(this.showImage)
  this.buttonName='Hide Image';
  else
  this.buttonName='Show Images';
  
}
  ngOnInit(): void {
    console.log("on Init");
  }

}
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
// })
// export class TableBasicExample {
//   
  
// }
