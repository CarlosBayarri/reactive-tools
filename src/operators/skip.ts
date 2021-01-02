import { of, fromEvent, interval } from 'rxjs';
import { first, map, skip, take, takeUntil, takeWhile, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'stop';
document.body.append(button);

const counter$ = interval(1000);

const click$ = fromEvent(button, 'click').pipe(skip(1));

counter$.pipe(
    takeUntil(click$) // cancela a la segunda emision del click por el skip(1)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});
