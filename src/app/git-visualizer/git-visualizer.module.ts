import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { GitVisualizerRoutingModule } from './git-visualizer-routing.module';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommitsListComponent,
    ReposListComponent
  ],
  imports: [
    CommonModule,
    GitVisualizerRoutingModule,
    ReactiveFormsModule
  ]
})
export class GitVisualizerModule { }
