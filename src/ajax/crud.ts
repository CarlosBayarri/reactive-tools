import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post(url, {
    id: 1,
    name: 'Ironman'
}, {
    'token': 'ABC'
}).subscribe(console.log)

ajax.put(url, {
    id: 1,
    name: 'Ironman'
}, {
    'token': 'ABC'
}).subscribe(console.log)

ajax({
    url: url, // con ECMAScript6 basta con url,
    method: 'POST',
    headers: {
        'token': 'ABC'
    },
    body: {
        id: 1,
        name: 'Ironman'
    }
}).subscribe(console.log)