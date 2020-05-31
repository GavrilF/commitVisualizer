import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommit } from '../models/ICommit';
import { Observable } from 'rxjs';
import { IRepository } from '../models/IRepository';
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  
  rootUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getCommits(user: string, repo:string ): Observable<ICommit[]>{
    return this.http.get<ICommit[]>(`${this.rootUrl}/repos/${user}/${repo}/commits`)
  }
  getUserAllRepos(user: string){
    return this.http.get<IRepository[]>(`${this.rootUrl}/users/${user}/repos`)
  }
}
