import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //event created to pass category and query to parent class
  @Output() success = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  showValue(query, category) : void {
    this.success.emit({
      'query' : query,
      'category' : category
    });
  }
  // for the search to work even on pressing enter
  onPressEnter(event) {
    if(event.keyCode == 13) {
      document.getElementById("searchButton").click();
    }
  }
}