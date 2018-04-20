import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public category : String;
  public query : String;
  
  setCategoryAndQuery(event) : void {
    this.category = event.category;
    this.query = event.query;
    alert(this.category+":"+this.query);
  }
  
}
