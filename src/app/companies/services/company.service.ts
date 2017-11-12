import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Company} from '../models/company';
import {environment} from '../../../environments/environment';
import {handleError} from '../../shared/utils';

@Injectable()
export class CompanyService {
  private baseUrl: string = environment.apiEndpoint + 'companies';

  constructor(private http: HttpClient) {}

  get(): Observable<Company[]> {
    return this.http.get(this.baseUrl)
      .map(companies => companies)
      .catch(handleError);
  }
}
