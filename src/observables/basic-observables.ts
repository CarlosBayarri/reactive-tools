import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Value: ', value),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Complete')
}

const myname$: Observable<string> = new Observable(subscriber => {
    subscriber.next('Hola')
    subscriber.complete()
});

// myname$.subscribe(console.log)

/*myname$.subscribe(
    value => console.log('Value:', value),
    error => console.warn('Error: ', error),
    () => console.log('Complete')
)*/

myname$.subscribe(observer);



