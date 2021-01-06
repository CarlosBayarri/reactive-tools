import { of, interval, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, delay, take } from 'rxjs/operators';
// Devolverá todos los valores de sus observables cuando se completen todos

const numbers$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const words$ = of('a','b','c').pipe(delay(3500));

forkJoin({num: numbers$, int: interval$, wor: words$});

// Caso comun: peticiones ajax simultáneas
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'CarlosBayarri';

forkJoin({
    user: ajax.getJSON(
        `${ GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos:ajax.getJSON(
        `${ GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL}/${GITHUB_USER}/gists`
    ),
}).subscribe(console.log);