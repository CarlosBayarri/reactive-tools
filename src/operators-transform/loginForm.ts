import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, tap, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';


// Helper
const httpRequestLogin = (emailPass) => 
ajax.post('https://reqres.in/api/login?delay=1', emailPass)
.pipe(
    pluck('response', 'token'),
    catchError(err=>of(err))
)


// Form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const buttonSubmit = document.createElement('button');

// Config
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputEmail.type = 'password';
inputEmail.placeholder = 'Pass';
inputEmail.value = 'cityslicka';

buttonSubmit.innerHTML = 'Login';

form.append(inputEmail, inputPass, buttonSubmit);

document.body.append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    // mergeMap(httpRequestLogin) // Si pulso cinco veces se hace la llamada cinco veces por el merge
    switchMap(httpRequestLogin) // Si pulso cinco veces se hace la última llamada
    // exhaustMap(httpRequestLogin) // Si pulso cinco veces hace la primera e ignora el resto
);
submitForm$.subscribe();