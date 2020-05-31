import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { GitVisualizerRoutingModule } from './git-visualizer-routing.module';



@NgModule({
  declarations: [CommitsListComponent],
  imports: [
    CommonModule,
    GitVisualizerRoutingModule
  ]
})
export class GitVisualizerModule { }
