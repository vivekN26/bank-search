import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';
  public readonly sizeList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  public list = [];
  public start = 0;
  public pageSize = 10;
  public pageLen;
  public dataLoading = false;
  public searchQuery: any;

  setData(e) {
    this.list = e;
    console.log(e);
    this.changePageSize();
  }

  changeStatus(e) {
    this.dataLoading = e;
  }

  setQuery(e) {
    this.searchQuery = e;
  }

  changePageSize() {
    this.pageLen = ((this.list.length % this.pageSize) === 0) ? (this.list.length / this.pageSize) : Math.trunc(this.list.length / this.pageSize) + 1;
  }

  changePageNum(e) {
    this.start = e;
  }
}
