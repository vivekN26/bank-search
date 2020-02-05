import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }
  setAsFav(bank) {
    let fav_list = this.getFav();
    fav_list[bank.city + '_' + bank.ifsc] = bank;
    localStorage.setItem('fav_list', JSON.stringify(fav_list));
  }
  getFav() {
    let list = localStorage.getItem('fav_list');
    if (list === null) {
      return {};
    }
    return JSON.parse(list);
  }
  removeFav(bank) {
    let fav_list = this.getFav();
    delete fav_list[bank.city + '_' + bank.ifsc];
    localStorage.setItem('fav_list', JSON.stringify(fav_list));
  }
}
