// concatena observables internos
// uno no empieza hasta que el anterior no se completa
// se pone en cola

import { interval, fromEvent } from 'rxjs';
import { concatMap, take } from "rxjs/operators";

const interval$ = interval(1000).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap( () => interval$ )
).subscribe(console.log);