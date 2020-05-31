import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommit } from '../models/ICommit';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  rootUrl = 'https://api.github.com';
  user = 'GavrilF';
  repo = 'angularSoftUni'
  constructor(private http: HttpClient) { }

  getCommits(): Observable<ICommit[]>{
    return this.http.get<ICommit[]>(`${this.rootUrl}/repos/${this.user}/${this.repo}/commits`)
  }
}
