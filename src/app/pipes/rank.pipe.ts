import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
      case 1:
        return 'st';
        break;
      case 2:
        return 'nd';
        break;
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

}
