import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Interfaces
interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    gravatar_url: string;
    html_url: string;
}   
interface GithubUsersRes {
    total_count: number;
    incomplete_results: boolean;
    items: GithubUser[];
}

// Helpers
const showUsers = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    for(const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor)
    }
}



// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(1000), // esperamos un segundo despues de escribir
    pluck<KeyboardEvent, string>('target', 'value'), // extrae target y value
    map<string, Observable<GithubUsersRes>>(texto => ajax.getJSON(`https://api.github.com/search/users/q=${texto}`)), // mapeamos a una llamada ajax
    mergeAll<GithubUsersRes>(), // mergeamos ambas observables
    pluck<GithubUsersRes, GithubUser[]>('items') // extrae items
).subscribe(console.log);