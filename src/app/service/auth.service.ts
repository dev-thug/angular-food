import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signInUrl = "/api/signin"

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
}
