import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Value: ', value),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Complete') // It is not the same as subscribe()
}


const interval$ = new Observable<number>(subscriber => {
    // Creating count values 0 1 2 3
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count)

        if (count===5) subscriber.complete();

    }, 1000)

    return () => {
        clearInterval(interval)
        console.log('Close interval')
    }
})

const subscription1 = interval$.subscribe(observer)
const subscription2 = interval$.subscribe(observer)
const subscription3 = interval$.subscribe(observer)

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    //subscription2.unsubscribe();
    //subscription3.unsubscribe();

    console.log('Closed')
}, 6000);
