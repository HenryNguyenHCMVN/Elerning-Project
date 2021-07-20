import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';





interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private BASE_URL = "https://elearning0706.cybersoft.edu.vn/api";

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, option = {} as Options): Observable<T> {
    return this.httpClient
    .get<T>(`${this.BASE_URL}/${url}`, option)
    .pipe(catchError(this.handleError)
    );
  }

  post<T>(url:string, body:any, option = {} as Options): Observable<T>{
    return this.httpClient
    .post<T>(`${this.BASE_URL}/${url}`,body, option)
    .pipe(catchError(this.handleError)
    );
  }

  put<T>(url:string, body:any, option = {} as Options): Observable<T>{
    return this.httpClient
    .put<T>(`${this.BASE_URL}/${url}`,body, option)
    .pipe(catchError(this.handleError)
    );
  }

  delete<T>(url: string, option = {} as Options): Observable<T> {
    return this.httpClient
    .delete<T>(`${this.BASE_URL}/${url}`, option)
    .pipe(catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);

    switch (error.status) {
      case 404:
        console.log('URL not found error');
        break;
      case 400:
        console.log('URL bad request error');
        break;
      case 500:
        console.log('Internal server error');
        break;
      case 401:
        //kiểm tra token => hết hạn => logout
        //kiểm tra nếu không có token => thông báo lỗi
        console.log('Internal server error');
        break;
      default:
        break;
    }
    // đưa lỗi ra hiển thị
    return throwError(error)
  }
}
