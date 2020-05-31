import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsListComponent } from './commits-list/commits-list.component';

const gitVisualizerRoutes: Routes = [
    {path: '', component: CommitsListComponent}
]
@NgModule({
    imports: [RouterModule.forChild(gitVisualizerRoutes)],
    exports: [RouterModule],
  })
  export class GitVisualizerRoutingModule {}