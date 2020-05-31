import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { ICommit } from '../models/ICommit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent implements OnInit {
  commits: ICommit[];
  noAuthorImagePlaceholder = "https://camo.githubusercontent.com/dd3196b85962dd6762cc1d0de0eb9cbeae00522a/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f37656263376539343062623433376335373936663938616133623839303064313f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3634";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commits = this.route.snapshot.data.location as ICommit[];
  }

}
