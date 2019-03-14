import { Component } from '@angular/core';
import { NetworkService } from './shared/services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'chatbot';

  public payload = [];
  public data = [];


  constructor(private networkService: NetworkService) {

  }

    
}
