import { fromEvent } from 'rxjs';

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: value => console.log('next', value)
}

src1$.subscribe(({x, y}) => console.log(x, y));
src2$.subscribe(eve => console.log(eve.key))