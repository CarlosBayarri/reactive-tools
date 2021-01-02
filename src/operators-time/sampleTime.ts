
// sampleTime: cuando alguien se subscribe, empezará a contar y emitir
// se realiza un intervalo de tiempo y emite cada x segs el ultimo, pero si yo no interacciono no emite

import { asyncScheduler, fromEvent } from 'rxjs';
import { sampleTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x, y})),
    sampleTime(2000)
).subscribe(console.log);
// se hace click, se espera dos segs y se imprime x y