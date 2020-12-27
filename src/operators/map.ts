import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

range(1,5).pipe(map<number,number>(number=>number*2)).subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event=>event.code)
);

keyUp$.subscribe(value => console.log('value: ', value));