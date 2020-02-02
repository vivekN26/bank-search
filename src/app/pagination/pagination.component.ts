import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() {
  }

  private _pagesLen: number;

  @Input() set pagesLen(value: number) {

    this._pagesLen = value;
    this.setCounter(this._pagesLen);

  }

  get pagesLen(): number {

    return this._pagesLen;

  }
  @Input() count: number;
  @Input() limit: number;
  @Input() currentPage: number;
  @Output() changePage = new EventEmitter();
  counter: number[];
  start = 0;
  numLimit = 10;

  next() {
    this.currentPage += 1;
    if (this.currentPage > this.numLimit) {
      this.start = this.numLimit;
      this.numLimit += this.numLimit;
    }
    this.setPage(this.currentPage);
  }

  prev() {
    this.currentPage -= 1;
    if (this.currentPage <= this.start) {
      this.numLimit = this.start;
      this.start -= this.start;
    }
    this.setPage(this.currentPage);

  }

  setPage(num) {
    this.currentPage = num;
    this.changePage.emit(this.currentPage);
  }
  setCounter(e) {
    this.counter = Array.from(Array(e), (x, i) => i);
    console.log(this.counter);

  }

  ngOnInit() {
    if (this.pagesLen === undefined) {
      this.pagesLen = ((this.count % this.limit) === 0) ? (this.count / this.limit) : Math.trunc(this.count / this.limit) + 1;
      console.log(this.count);
      this.setCounter(this.pagesLen);

    }
    // this.counter = Array.from(Array(10), (x, i) => i);
  }

}
