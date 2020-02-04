import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }
  setAsFav(bank) {
    let fav_list = this.getFav();
    fav_list.push(bank);
    localStorage.setItem('fav_list', JSON.stringify(fav_list));
  }
  getFav() {
    let list = localStorage.getItem('fav_list');
    if (list === null || (list !== undefined && JSON.parse(list).length === 0)) {
      return [];
    }
    return JSON.parse(list);
  }
}
