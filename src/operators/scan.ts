
// Similar al reduce
import { from, interval } from "rxjs";
import { map, reduce, scan, take, tap } from "rxjs/operators";


const numbers = [1,2,3,4,5];
const reducer = (acum: number, current: number) => acum + current;
from(numbers).pipe(
    scan(reducer, 0)
).subscribe(console.log);

interface User {
    id?: string;
    autentication?: boolean;
    token?: string;
    age?: number;
}
const users: User[] = [
    {id: 'aa', autentication: false, token: null},
    {id: 'aa', autentication: true, token: 'ABC'},
    {id: 'aa', autentication: false, token: 'ABC'},
];

const state$ = from(users).pipe(
    scan<User>((acc, cur) => {
        return {...acc, ...cur}
    }, {age: 33})
);

const id$ = state$.pipe(
    map(state=>state.id)
).subscribe(console.log);