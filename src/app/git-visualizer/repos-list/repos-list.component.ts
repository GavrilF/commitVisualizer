import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IRepository } from '../models/IRepository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
})
export class ReposListComponent implements OnInit {
  userForm: FormGroup;
  repositories: IRepository[];

  constructor(
    private gitHubService: GithubApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      repository: ['', Validators.required],
    });
  }

  getAllRepos() {
    this.gitHubService.getUserAllRepos(this.userForm.value.username).subscribe(
      (res) => {
        this.repositories = res;
      },
      (err) => {
        console.log(err);
        this.repositories = [];
        this.userForm.get('username').setErrors({'invalid': true})
      }
    );
  }

  getRepoCommits(){
    const { username, repository } = this.userForm.value;
    this.router.navigate(['gitApi', username, repository])
  }
}
