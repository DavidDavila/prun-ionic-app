import { Pipe, PipeTransform } from '@angular/core';
import { LETTER_LIST } from '../constants/letter-list.const';

@Pipe({
  name: 'groupByFirstLetter',
})
export class GroupByFirstLetterPipe implements PipeTransform {
  transform(
    value: { [key: string]: any },
    ...args: unknown[]
  ): { [key: string]: any } {
    const letterEmpty = LETTER_LIST.reduce((acc: any, letter: string) => {
      acc[letter.toLowerCase()] = [];
      return acc;
    }, {});

    const result = Object.keys(value).reduce((acc: any, el: any) => {
      const firstLetter: string = el[0].toLowerCase();

      acc[firstLetter] = [
        ...acc[firstLetter],
        Object.assign(value[el], { name: el }),
      ];
      return acc;
    }, letterEmpty);
    return result;
  }
}
