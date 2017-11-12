import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import * as CompanyActions from '../actions/company';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';

@Injectable()
export class CompanyEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(CompanyActions.LOAD)
    .startWith(new CompanyActions.Load())
    .switchMap(() =>
      this.companyService.get()
        .map((results: Company[]) => new CompanyActions.LoadSuccess(results))
        .catch(error => {
          return Observable.of(new CompanyActions.LoadFail());
        }));

  constructor(private actions$: Actions, private companyService: CompanyService) {
  }
}
