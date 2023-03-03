import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  myFunction() {
    fetch('https://504a-134-238-18-189.in.ngrok.io/api', {credentials: 'include'})
      .then((response) => {

        // Code for handling the response
      })
      .catch((error) => {

        // Code for handling the error
      });
  }
}
