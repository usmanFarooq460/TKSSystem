import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountsService {
  header = new HttpHeaders({ "Content-Type": "application/json" });
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  Login(data) {
    return this.http.post<any>(this.ApiUrl + "login", data, {
      headers: this.header,
    });
  }
}
