import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signInUrl = "/api/signin"
  private signUpUrl = "/api/signup"
  constructor(
    private http: HttpClient
  ) {
  }

  signIn(email: string, password: string): Observable<any> {
    const params = new FormData();
    params.append("email", email);
    params.append("password", password);

    return this.http.post<any>(this.signInUrl, params);
  }

  signUp(email: string, password: string, name: string): Observable<any> {
    const params = new FormData();
    params.append("email", email);
    params.append("password", password);
    params.append("name", name);

    return this.http.post<any>(this.signUpUrl, params);
  }

  isSign(): boolean{
    const token = localStorage.getItem('AUTH-TOKEN');
    if (token) {
      return true;
    } else {
      return false;
    }
  }


}
