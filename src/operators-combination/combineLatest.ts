// Emite los valores de observables internos simultaneamente
// hasta que todos os obs internos no emitan un primer valor no se ejecuta la salida
// hasta que no se completen cada obs, la subscripcion no se completa

import { combineLatest, fromEvent, merge } from "rxjs"
import { pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest([
    keyup$.pipe(pluck('type')),click$.pipe(pluck('type'))
]);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'email...';
input2.placeholder = '***';
input2.type = 'password';

document.body.append(input1,input2);

// Helper
const getInputStream = (element: HTMLElement ) => 
    fromEvent<KeyboardEvent>(element, 'keyup').pipe(
    pluck<KeyboardEvent,string>('target','value')
);

combineLatest([
    getInputStream(input1),
    getInputStream(input2)
]).subscribe(console.log)

// Hasta que no escribo el password no envía el valor de ambos inputs
