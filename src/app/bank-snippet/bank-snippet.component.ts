import {Component, Input, OnInit} from '@angular/core';
import {FavouritesService} from '../services/favourites.service';
import { MatButtonModule, MatCheckboxModule, MatIcon } from '@angular/material';

@Component({
  selector: 'app-bank-snippet',
  templateUrl: './bank-snippet.component.html',
  styleUrls: ['./bank-snippet.component.css']
})
export class BankSnippetComponent implements OnInit {

  constructor(private favService: FavouritesService) { }
  @Input() bank;
  ngOnInit() {
  }
  setAsFav() {
    this.favService.setAsFav(this.bank);
    this.bank.markedFav = true;
  }
  removeFav() {
    this.favService.removeFav(this.bank);
    this.bank.markedFav = false;
  }
}
