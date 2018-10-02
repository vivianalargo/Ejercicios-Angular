import { Component } from '@angular/core';
import { AnswerService} from './Services/answer.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  result : any = [];
  APIURl: string = 'https://yesno.wtf/api';
  question: string = '¿Qué te gustaría saber?';
  btnResult: string = 'Descúbrelo Aquí';

  constructor( private answerService:AnswerService) { }

  answerQuestion():void {
    this.answerService
    .getAnswer(this.APIURl)
    .subscribe(
    resultQuestion => (this.result = resultQuestion),
    error => (console.log('Error', error))
    )
  }
}
