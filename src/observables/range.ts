import { asyncScheduler, of, range } from 'rxjs';

//const src$ = of(1,2,3,4,5);

// Range sincrono
const src1$ = range(1,5);

// Range asincrono
const src$ = range(1,5,asyncScheduler);
console.log('inicio');
src$.subscribe(console.log);
console.log('fin');