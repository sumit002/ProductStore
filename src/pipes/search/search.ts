import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem',
})

export class SearchPipe implements PipeTransform {
  /**
   * search by name & serial of a list
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.name && it.name.toLowerCase().includes(terms) || it.serial && it.serial.toLowerCase().includes(terms);
    });
  }
}
