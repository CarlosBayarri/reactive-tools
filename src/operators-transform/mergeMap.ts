import { interval, of, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

// Emite hasta que se cancela la interna
const letras$ = of('a','b','c')
letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)/*.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
})*/

// Mientras el usuario mantiene el click emite, hasta que suelta
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);
