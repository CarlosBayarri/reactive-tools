
// debounceTime: devuelve el ultimo valor del observable cada x segundos

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// Esto es útil para controlar observables que emiten una gran catidad
// de mensajes muy rapidamente, con demasiados evetnos que pueden bajar el rendimiento.

click$.pipe(
    debounceTime(2000)
);

const input = document.createElement('input');
document.body.append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    debounceTime(1000), // que no se ejecute con cada interaccion, sino cada x segs
    pluck('target','value'), // que imprima solo el valor del target
    distinctUntilChanged() // solo se llama cuando es diferente (si pongo pepsi llama, si borro rapidamente antes del x segs y pongo otra vez la i que he quitado no llama)
);

input$.subscribe(console.log);
