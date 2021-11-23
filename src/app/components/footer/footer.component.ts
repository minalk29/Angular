import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
email:string='listen@music.com'
phone:number=89452378
  constructor() { }

  ngOnInit(): void {
  }

}
