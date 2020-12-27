import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";
import { createSecureContext } from "tls";


const numbers = [1,2,3,4,5];
const reducer = (acum: number, current: number) => {
    return acum + current;
}

const total = numbers.reduce(reducer, 0);
console.log('total', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(reducer)
).subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
})