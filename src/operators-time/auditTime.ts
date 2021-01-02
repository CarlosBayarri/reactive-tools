
// auditTime: parecido a debounceTime

import { fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x, y})),
    auditTime(2000)
).subscribe(console.log);
// Emite el valor mas reciente del observable, el ultimo click que hago