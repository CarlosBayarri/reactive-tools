import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const numbers$ = of(1,2,3).pipe(
    startWith(0) // Pone el 0 antes del 1, es sincrono
    );
numbers$.subscribe(console.log);