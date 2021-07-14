import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stopWatchTime'
})
export class StopWatchTimePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let result = ''
    if(value >=60){
      let min = Math.floor(value / 60);
      let sec = value - (min * 60);
      let fsec = sec < 10 ? '0' + sec : sec;
      result = `${min}:${fsec}`;
    }
    else{
      let fv = value < 10 ? '0' + value : value;
      result = "0:" + fv;
    }
    return result;
  }

}