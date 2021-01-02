import { of, fromEvent, interval } from 'rxjs';
import { first, map, take, takeUntil, takeWhile, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'stop';
document.body.append(button);

const counter$ = interval(1000);

const click$ = fromEvent(button, 'click');

counter$.pipe(
    takeUntil(click$)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});
