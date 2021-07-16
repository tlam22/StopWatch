import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
  count : number;
  btnTxt : string;
  start = 'Start';
  stop = 'Stop';
  stopTimer : any;
  constructor() {
    this.count = 0;
    this.btnTxt = this.start;
   }

  ngOnInit() {

  }

  buttonClicked(){
    if(this.btnTxt === this.start){
      this.btnTxt = this.stop;
      this.stopTimer =   setInterval(() =>{
        this.count++;
      }, 1000)
    }
    else{
      this.btnTxt =this.start;
      clearInterval(this.stopTimer);
    }
  }

  clearStopTimer(){
    this.count = 0;
  }
}