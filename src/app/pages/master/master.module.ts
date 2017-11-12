import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {MasterRoutingModule} from './master-routing.module';
import {routedComponents} from '../master/master-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    MasterRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MasterModule { }
