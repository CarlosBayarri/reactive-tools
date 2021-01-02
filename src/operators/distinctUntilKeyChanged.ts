import { of, fromEvent, interval, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Character {
    name: string,
    power: number
}

const characters: Character[] = [
    {name: 'Ironman', power:2},
    {name: 'Hulk', power:2},
    {name: 'Spiderman', power:2},
    {name: 'Ironman', power:4},
    {name: 'Spiderman', power:1},
    {name: 'Spiderman', power:2},
    {name: 'Spiderman', power:3},
]
from(characters).pipe(
    distinctUntilKeyChanged('name') // ===
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});