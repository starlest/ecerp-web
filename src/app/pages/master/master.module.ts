import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {MasterRoutingModule} from './master-routing.module';
import {routedComponents} from '../master/master-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    MasterRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MasterModule { }
