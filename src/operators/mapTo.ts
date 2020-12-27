
import { range, fromEvent } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

// Cambia cualquier entrada a una salida especifica


range(1,5).pipe(map<number,number>(number=>number*2)).subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    mapTo('key pressed')
);

keyUp$.subscribe(value => console.log('value: ', value));