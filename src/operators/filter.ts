import { from, range } from 'rxjs';
import { filter } from 'rxjs/operators';

// Range with pipe filter
range(1,10).pipe(
    filter((value,i)=>value%2===1)
).subscribe(console.log);


// DC filter
interface character {
    type: string;
    name: string;
}
const detectivecomics: character[] = [
    {
        type: 'hero',
        name: 'batman'
    },
    {
        type: 'villain',
        name: 'joker'
    }
];

from(detectivecomics).pipe(
    filter(dc=> dc.type==='hero')
).subscribe(console.log)