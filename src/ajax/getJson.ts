import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';
const errorManagement = (err: AjaxError) => {
    console.warn('error: ', err.message);
    return of({
        ok: false,
        users: []
    })
}
// getJson devuelve la respuesta en JSON 
/*const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': 'ABC123'
});*/
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': 'ABC123'
}).pipe(
    catchError(errorManagement)
);
obs$.subscribe({
    next: value => console.log('next:',value),
    error: err => console.warn('error: ', err),
    complete: () => console.log('complete')
})
// si salta el error no llega al complete
// pero con el catchError(errorManagement) llega a hacer next y el complete