
// throttleTime: lo contrario que debounceTime, emite el valor al llamar al obs y luego ignora las demas x segs

import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// Esto es útil para controlar observables que emiten una gran catidad
// de mensajes muy rapidamente, con demasiados eventos que pueden bajar el rendimiento.

click$.pipe(
    throttleTime(2000)
);

const input = document.createElement('input');
document.body.append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true, // primer elemento
        trailing: true // ultimo elemento
    }),
    pluck('target','value'), // que imprima solo el valor del target
    distinctUntilChanged() // solo se llama cuando es diferente (si pongo pepsi llama, si borro rapidamente antes del x segs y pongo otra vez la i que he quitado no llama)
);

input$.subscribe(console.log);
