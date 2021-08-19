import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoaderService } from '../../loader/loader.service';





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

  constructor(private httpClient: HttpClient, private loadingService: LoaderService) { }

  get<T>(url: string, option = {} as Options): Observable<T> {
    this.loadingService.show()
    return this.httpClient.get<T>(`${this.BASE_URL}/${url}`, option).pipe(tap((data) => {
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    }, error => {
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    }), catchError(this.handleError)
    )
  }


  post<T>(uri: string, data: any, options = {} as Options): Observable<T> {
    this.loadingService.show()
    return this.httpClient.post<T>(`${this.BASE_URL}/${uri}`, data, options).pipe(tap((data) => {
      console.log(data);
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    }, err => {
      this.loadingService.hidden()
    }), catchError(this.handleError))
  }

  put<T>(uri: string, data: any, options = {} as Options): Observable<T> {
    this.loadingService.show()
    return this.httpClient.put<T>(`${this.BASE_URL}/${uri}`, data, options).pipe(tap((data) => {
      console.log(data);
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    }, err => {
      this.loadingService.hidden()
    }), catchError(this.handleError))
  }

  delete<T>(uri: string, options = {} as Options): Observable<T> {
    this.loadingService.show()
    return this.httpClient.delete<T>(`${this.BASE_URL}/${uri}`, options).pipe(tap((data) => {
      console.log(data);
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    }, err => {
      this.loadingService.hidden()
    }), catchError(this.handleError))
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
