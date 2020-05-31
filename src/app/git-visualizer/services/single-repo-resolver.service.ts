import { Injectable } from '@angular/core';
import { GithubApiService } from './github-api.service';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ICommit } from '../models/ICommit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleRepoResolverService implements Resolve<ICommit[]>{

  constructor(private gitHubService: GithubApiService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICommit[]>{
    const user = route.paramMap.get('user');
    const repo = route.paramMap.get('repo');

    return this.gitHubService.getCommits(user,repo)
  }
}
