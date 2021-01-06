import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

const interval$ = interval(1000);

// Con esto se emite mucho, el mergemap mantiene todas las subscripciones internas
click$.pipe(
    mergeMap( () => interval$)
).subscribe(console.log);

// Con esto se cierra el observable anterior, solo mantiene una subscripcion activa
click$.pipe(
    switchMap( () => interval$)
).subscribe(console.log);