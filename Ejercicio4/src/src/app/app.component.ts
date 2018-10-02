import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  question = '¿Te ha gustado ngGirls hasta el momento?'
  response

    answer(value){
      this.response = value
  }
}
