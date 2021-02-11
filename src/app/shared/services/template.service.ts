import { UserHtml, UserService } from "./../../about/dto/user.dto";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry, map, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<UserService> {
    return this.http.get<UserService>("/api/user");
  }
}
