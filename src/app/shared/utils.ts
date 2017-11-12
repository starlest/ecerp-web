import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateSnapshot, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;
    const queryParams = routerState.root.queryParams;
    return {url, queryParams};
  }
}

/**
 * Handle HTTP response error
 * @param error HTTP response error
 * @returns {Observable<any>} Rxjs Observable encapsulating the error
 */
export function handleError(error: Response): Observable<any> {
  // output errors to the console.
  console.error(error);
  return Observable.throw(error.json() || 'Server error');
}
