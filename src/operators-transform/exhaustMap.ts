// ignora las subscripciones entrantes mienras haya una activa
// si hay un observable o subs interna pasa de una nueva, si no la acepta
// es util cuando tenemos eventos que spamean mucho

import { interval, fromEvent } from 'rxjs';
import { concatMap, exhaustMap, take } from "rxjs/operators";

const interval$ = interval(1000).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap( () => interval$ )
).subscribe(console.log);