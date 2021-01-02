import { of, fromEvent } from 'rxjs';
import { first, map, take, tap } from "rxjs/operators";
import { createImmediatelyInvokedFunctionExpression } from 'typescript';


const numbers$ = fromEvent<MouseEvent>(document, 'click');

numbers$.pipe(
    tap<MouseEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first(event => event.clientY >= 150) // = take(1)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});
