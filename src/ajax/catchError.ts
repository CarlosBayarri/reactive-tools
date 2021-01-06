
// Fetch with observables
import { of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const errorManagement = (err: AjaxError) => {
        console.warn('error: ', err.message);
        return of([])
}
ajax(url).pipe(
    pluck('response'),
    catchError(errorManagement)
).subscribe(console.log)

/* // Fetch wih promises
    const errorManagement = (response: Response) => {
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return response;
    }
    const fetchPromise = fetch(url);
    fetchPromise
    .then(errorManagement)
    .then(res=>res.json())
    .then(console.log)
    .catch(error=>console.warn('error: ', error));
*/