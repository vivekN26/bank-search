import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
/*
export class SearchPipe implements PipeTransform {

  transform(list: any[], prop: string, searchQuery: string, multiple: boolean = false): any {
    return list ? list.filter(item => item[prop].search(new RegExp(searchQuery, 'i')) > -1) : [];
  }

}
*/

export class SearchPipe implements PipeTransform {

  transform(list: any[], prop: string, searchQuery: string, multiple: boolean = false): any {
    if (multiple) {
      /*search with all properties*/
      return list ? list.filter(item => {

        for (const key in item) {
          if (typeof item[key] === 'string' && item[key].search(new RegExp(searchQuery, 'i')) > -1) {
            return true;
          }
        }
      }) : [{noresult: 'No result found'}];
    }
    return list ? list.filter(item => item[prop].search(new RegExp(searchQuery, 'i')) > -1) : [];
  }

}
