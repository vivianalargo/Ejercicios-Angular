import { HttpClient,HttpErrorResponse }  from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError as ObservableThrowError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';


@Injectable()
export class AnswerService {

  constructor(private http:HttpClient) { }

  getAnswer(APIUrl)
  {
    return this.http.get<Array<{}>>(APIUrl).pipe(map(data =>data),catchError(this.handleError));
  }

  private handleError(res:HttpErrorResponse|any)
  {
    console.error(res.error || res.body.error);
    return ObservableThrowError(res.error || 'Server Error');
  }

}