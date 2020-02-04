import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
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
  @Input() totalPageSize: number;
  @Input() limit: number;

  @Input() currentPage: number;
  @Output() changePage = new EventEmitter();
  counter: number[];
  start = 0;
  numLimit = 10;
  length = 10;

  next() {
    this.currentPage += 1;
    if (this.currentPage > this.numLimit - 1) {
      this.start = this.numLimit;
      this.numLimit += this.length;
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

  // setLen() {
  //   if (this.pagesLen === undefined) {
  //     this.pagesLen = ((this.count % this.limit) === 0) ? (this.count / this.limit) : Math.trunc(this.count / this.limit) + 1;
  //     console.log(this.count);
  //     this.setCounter(this.pagesLen);
  //
  //   }
  // }

  ngOnInit() {
    // this.count = this.pagesLen;
    // this.numLimit = this.limit;

    // this.counter = Array.from(Array(10), (x, i) => i);
  }

}
