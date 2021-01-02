
// sample: parecide a sampleTime

import { asyncScheduler, fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(1000);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
// se hace click y obtengo la muestra de como está el primer observable cuando yo hago click
// en este caso imprime un numero por el interval
// puedo hacer muchos clicks, pero si no sale del interval no imprime