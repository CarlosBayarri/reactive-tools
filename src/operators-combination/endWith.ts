import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

const numbers$ = of(1,2,3).pipe(
    endWith(4) // Cuando el observable ya no tiene mas valores para emitir, emite el del endWith
    );
numbers$.subscribe(console.log);