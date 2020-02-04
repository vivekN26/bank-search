import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../services/api.service';
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
  constructor(public api: ApiService) { }

  changeTriggered() {
    this.keySearchQuery.emit(this.searchKey);
  }
  changeSelection() {
    this.getBankList();
  }
  getBankList() {
    this.loading.emit(true);
    let params = {
      params : { city: this.selectedCity }
    }
    this.api.getData('GET', '/banks', params).subscribe(
      data => {
        console.log(data);
        this.bankList = data;
        this.dataSet.emit(data);
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
