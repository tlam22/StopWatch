import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
  count : number;
  constructor() {
    this.count = 0;
   }

  ngOnInit() {
    setInterval(() =>{
      this.count++;
    }, 1000)
  }

}