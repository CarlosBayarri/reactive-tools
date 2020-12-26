import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia 
 * from = array, promesa, iterable, observable...
 */

 const observer = {
     next: value => console.log('next: ', value),
     complete: () => console.log('complete')
 }
 // const source$ = from([1,2,3,4]); es lo mismo que const source$ = of([1,2,3,4]);

 // Http Example (bad)
 /*const source$ = from(fetch('https://api.github...'));
 source$.subscribe(async(resp) => {
     console.log(resp);
     const data = await resp.json();
     console.log(data);
 })*/

 const generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
 }
const iterable = generator();

from(iterable).subscribe(observer);