

// Es una funcion que recibe observables y crea uno nuevo
// es la funcion concat, no el operador concatMap que esta obsoleto
// de dos observables, el segundo no comienza hasta que el primero se completa

import { concat, interval, of } from 'rxjs';
import { take } from "rxjs/operators";

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log)
// Output: 0,1,2,0,1,1