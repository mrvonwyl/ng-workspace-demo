import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '@mrvonwyl/hello';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit() {
    this.title = this.helloWorldService.hello();
  }
}
