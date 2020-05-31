import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { SingleRepoResolverService } from './services/single-repo-resolver.service';

const gitVisualizerRoutes: Routes = [
    { path: '', component: ReposListComponent },
    { path: ':user/:repo', component: CommitsListComponent, resolve: { location: SingleRepoResolverService} }
];
@NgModule({
  imports: [RouterModule.forChild(gitVisualizerRoutes)],
  exports: [RouterModule],
})
export class GitVisualizerRoutingModule {}
