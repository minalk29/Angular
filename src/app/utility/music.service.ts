import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  date:Date=new Date();
  constructor() {  
   }
   getMusic(){
    return [{mId:101,mName:"80 Millionen",singer:"Max Giesinger",rating:5,album:"../../../assets/80.jpg",song:"../../../assets/Namika_-__Lieblingsmensch.mp3",ReleaseDate:this.date}
    ,{mId:102,mName:"Lieblingmensch",singer:"Namika ",rating:5,album:"../../../assets/lieb.jpg",song:"../../../assets/Namika_-__Lieblingsmensch.mp3",ReleaseDate:this.date}
  ,{mId:102,mName:"Faded",singer:"Alan Walker",rating:5,album:"../../../assets/faded.jpg",song:"../../../assets/Alan-Walker-Darkside-feat.-AuRa-and-Tomine-Harket.mp3",ReleaseDate:this.date}
,{mId:102,mName:"Believer",singer:"Imagine Dragons",rating:5,album:"../../../assets/believer.jpg",song:"../../../assets/Namika_-__Lieblingsmensch.mp3",ReleaseDate:this.date}
,{mId:102,mName:"Perfect",singer:"Ed Sheeran",rating:5,album:"../../../assets/perfect.jpg",song:"../../../assets/Alan-Walker-Darkside-feat.-AuRa-and-Tomine-Harket.mp3",ReleaseDate:this.date}]
  }
}
