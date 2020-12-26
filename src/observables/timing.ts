import { interval, timer } from 'rxjs';

// Interval es asincrono por naturaleza

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}
// Interval no completa por si mismo y timer completa a los segundos que pones
const interval$ = interval(1000);
const timer$ = timer(2000);

// timer(2000) es como setTimeout(() => {}, 2000);
// timer(0) es igual a timer()

// Notifiaciones a una hora determinada
/*const today = new Date();
today.setSeconds(today.getSeconds() + 5);
timer(today);*/

interval$.subscribe(observer);
timer$.subscribe(observer);