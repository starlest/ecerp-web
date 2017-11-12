import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {environment} from '../../../environments/environment';
import {getRequestOptions, handleError} from '../../shared/utils';

@Injectable()
export class CompanyService {
  private baseUrl: string = environment.apiEndpoint + 'companies';

  constructor(private http: HttpClient) {
  }

  get(): Observable<Company[]> {
    return this.http.get(this.baseUrl)
      .map(companies => companies)
      .catch(handleError);
  }

  add(company: Company) {
    const url = this.baseUrl;
    return this.http.post(url, JSON.stringify(company), getRequestOptions())
      .map(addedCompany => addedCompany)
      .catch(handleError);
  }

  update(company: Company): Observable<Company> {
    const url = this.baseUrl + '/' + company.id;
    return this.http.put(url, JSON.stringify(company), getRequestOptions())
      .map(updatedCompany => updatedCompany)
      .catch(handleError);
  }
}
