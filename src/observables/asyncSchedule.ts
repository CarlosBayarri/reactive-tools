import { asyncScheduler } from 'rxjs';

// Forma 1
// const salute = () => console.log('Hi');
// asyncScheduler.schedule( salute, 2000);

// Forma 2
const salute = name => console.log(`Hi ${name}`);
asyncScheduler.schedule(salute, 2000, 'ali')

// o

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(()=>subs.unsubscribe(), 6000)
