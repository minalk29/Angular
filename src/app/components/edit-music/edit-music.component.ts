import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})
export class EditMusicComponent implements OnInit {
id:any=0;
submitted=false;
  music=this.fb.group({
    mName:['',Validators.required],
    singer:['']
  });
  constructor(private fb:FormBuilder,private route:ActivatedRoute) { 
    //this.r.navigate(); for button instead of routerlink
    //this.id=this.route.snapshot.params.mId
    // console.log(this.id);
    
    this.route.paramMap.subscribe((p:ParamMap)=>
    {
this.id=p.get("mId");
    })
  }

  ngOnInit(): void {
  }
getMusic()
{
  this.submitted = true;
  alert("added"+this.music.value.mName+this.music.value.singer);
}
get musicControl() {
  return this.music.controls;
}
}
