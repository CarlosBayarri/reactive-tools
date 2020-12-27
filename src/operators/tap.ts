import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = range(1,5);

numbers$.pipe(
    tap(x=> {
        console.log('before', x);
        return 100;
    }),
    map(value=>value*10),
    tap({
        next: value => console.log('after', value),
        complete: () => console.log('end')
    })
).subscribe(console.log)