import { readable } from 'svelte/store';

export const prerender = true;

export const INTRO_DATA = readable({
	TEXT: "<!-- A front-end developer links together the world of design and technology, by integrating markup languages, design, scripts and frameworks. Their focus is on user experience, and the technology they implement hinges on how well it will accomplish that efficiency, speed, and smooth functionality. They also make sure that the design appears as it’s supposed to across various platforms and browsers.<br/><br/> -->One of the most satisfying feelings in the world is making a thing that someone else uses. Whether it's a game, an app, or a website, you feel satisfied the moment you see someone using it. You made a thing that was usable."
});
