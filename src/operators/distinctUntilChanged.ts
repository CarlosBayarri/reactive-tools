import { of, fromEvent, interval, from } from 'rxjs';
import { distinct, distinctUntilChanged, first, map, skip, take, takeUntil, takeWhile, tap } from "rxjs/operators";

const numbers$ = of<number|string>(1,'1',1,1,2,2,3,3,3,4,5,4,3,1);

numbers$.pipe(
    distinctUntilChanged() // ===
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});

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
    {name: 'Spiderman'},
]
from(characters).pipe(
    distinctUntilChanged((previus, next)=>previus.name===next.name) // ===
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});