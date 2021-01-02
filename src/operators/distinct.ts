import { of, fromEvent, interval, from } from 'rxjs';
import { distinct, first, map, skip, take, takeUntil, takeWhile, tap } from "rxjs/operators";

const numbers$ = of(1,1,1,2,2,3,3,3,4,5,4,3,1);

/*numbers$.pipe(
    distinct() // ===
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});
*/

interface Character {
    name: string
}

const characters: Character[] = [
    {name: 'Ironman'},
    {name: 'Hulk'},
    {name: 'Spiderman'},
    {name: 'Ironman'},
    {name: 'Spiderman'},
    {name: 'Spiderman'},
]
from(characters).pipe(
    distinct(c=>c.name) // ===
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});