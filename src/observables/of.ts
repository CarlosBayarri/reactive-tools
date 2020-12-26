import {of} from 'rxjs';


//const obs$ = of (1,2,3,4,5);
//const obs$ = of (...[1,2,3,4,5],2,3,4);
const obs$ = of (1, true, Promise.resolve(true), [1,2], 'string', {a:3});

obs$.subscribe(
    next => console.log(next),
    null,
    () => console.log('complete')
)