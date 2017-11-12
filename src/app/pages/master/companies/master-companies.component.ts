import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import * as fromCompanies from '../../../companies/reducers';
import * as CompanyActions from '../../../companies/actions/company';
import {Company} from '../../../companies/models/company';

@Component({
  selector: 'ngx-master-companies',
  templateUrl: './master-companies.component.html',
})
export class MasterCompaniesComponent implements OnInit, OnDestroy {
  companiesSubscription$: Subscription;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
      mode: 'inline',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private store: Store<fromCompanies.State>) {
  }

  ngOnInit() {
    this.companiesSubscription$ = this.store.select(fromCompanies.getAllCompanies)
      .map(companies => {
        this.source.load(companies);
      }).subscribe();
  }

  ngOnDestroy() {
    if (this.companiesSubscription$) {
      this.companiesSubscription$.unsubscribe();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Confirm changes?')) {
      this.store.dispatch(new CompanyActions.Update(event.newData as Company));
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
