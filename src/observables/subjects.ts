import { Observable, Observer, Subject, Subscriber } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Value: ', value),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Complete') // It is not the same as subscribe()
}


const interval$ = new Observable<number>(subs => {
    const interval = setInterval(() => subs.next(Math.random()), 1000);
    /*setTimeout(() => {
        subs.complete();
    }, 3000);*/
    return () => clearInterval(interval);
})

/**
 * 1 - Multicasting. Muchas subscripciones pueden estar subscritas y tendrán el mismo obs
 * 2 - Es observer
 * 3 - Next, error, complete
 * Cuando el dato es introducido por el observable se considera observable frio, y si se introduce fuera del observable es un obs caliente
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$); // Si no unsubscribe la instancia seguirá corriendo aunque se haga un complete del subject

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 5000);
// const subs1 = interval$.subscribe(rnd=>console.log(rnd));
// const subs2 = interval$.subscribe(rnd=>console.log(rnd));

// const subs1 = subject$.subscribe(rnd=>console.log('subs1 ', rnd))
// const subs2 = subject$.subscribe(rnd=>console.log('subs2 ', rnd))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)