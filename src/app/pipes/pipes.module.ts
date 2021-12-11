import { NgModule } from '@angular/core';
import { PositionPipe } from './position.pipe';

@NgModule({
  declarations: [PositionPipe],
  exports: [PositionPipe]
})
export class PipesModule { }
