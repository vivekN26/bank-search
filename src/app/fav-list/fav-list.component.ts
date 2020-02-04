import { Component, OnInit } from '@angular/core';
import {FavouritesService} from '../services/favourites.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {
  public fav_list = [];
  constructor(public favService: FavouritesService) { }

  ngOnInit() {
    this.fav_list = this.favService.getFav();
  }

}
