import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../services/api.service';
import {FavouritesService} from '../services/favourites.service';
// import _ from 'lodash';
import each from 'lodash/each';
export const CITIES = [
  {
    name: 'MUMBAI', label: 'Mumbai',
  },
  {
    name: 'BANGALORE', label: 'Bangalore',
  },
  {
    name: 'DELHI', label: 'Delhi',
  },
  {
    name: 'CHENNAI', label: 'Chennai',
  },
  {
    name: 'HYDERABAD', label: 'Hyderabad',
  }
]
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() dataSet = new EventEmitter();
  @Output() loading = new EventEmitter();
  @Output() keySearchQuery = new EventEmitter();
  public searchKey;
  public cities = CITIES;
  public selectedCity = this.cities[0].name;
  public bankList = [];
  private fav_list: any;
  constructor(public api: ApiService, public favService: FavouritesService) { }

  changeTriggered() {
    this.keySearchQuery.emit(this.searchKey);
  }
  changeSelection() {
    this.getBankList();
  }
  appendFavData(list) {
    this.fav_list = this.favService.getFav();
    each(list, (bank) => {
      bank.markedFav = !!(this.fav_list[bank.city + '_' + bank.ifsc]);
    })
    return list;
  }
  getBankList() {
    this.loading.emit(true);
    let params = {
      params : { city: this.selectedCity }
    }
    this.api.getData('GET', '/banks', params).subscribe(
      data => {
        console.log(data);
        this.bankList = this.appendFavData(data);
        this.dataSet.emit(this.bankList);
        this.loading.emit(false);
      }, error => {
        console.log(error);
        this.loading.emit(false);
      }
    );
  }
  ngOnInit() {
    console.log(this.selectedCity);
    this.getBankList();
  }

}
