import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Creating text and bar
const text = document.createElement('div');
text.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const body = document.querySelector('body');
body.style.padding = '10%';
body.append(text);

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');
body.append(progressbar);

// Calculate scroll percetage
const scrollPercentage = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight))*100;
}

// Subscription to scroll event
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    // map(event=>scrollPercentage(event))
    map(scrollPercentage)
);
progress$.subscribe(percentage=>progressbar.style.width = `${percentage}%`);