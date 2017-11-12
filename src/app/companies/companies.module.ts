import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './reducers';
import {CompanyService} from './services/company.service';
import {CompanyEffects} from './effects/company';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('companies', reducers),
    EffectsModule.forFeature([CompanyEffects]),
  ],
  providers: [CompanyService],
})
export class CompaniesModule {
}
