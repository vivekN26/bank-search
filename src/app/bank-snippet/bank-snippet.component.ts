import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-snippet',
  templateUrl: './bank-snippet.component.html',
  styleUrls: ['./bank-snippet.component.css']
})
export class BankSnippetComponent implements OnInit {

  constructor() { }
  @Input() bank;
  ngOnInit() {
  }

}
