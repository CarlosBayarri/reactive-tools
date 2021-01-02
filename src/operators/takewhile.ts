import { of, fromEvent } from 'rxjs';
import { first, map, take, takeWhile, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    takeWhile(({clientY}) => clientY <= 150, true) // inclusive true
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});
