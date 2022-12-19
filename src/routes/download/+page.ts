import { readable } from 'svelte/store';

export default readable({
	NAME: 'cv',
	BTNTEXT: 'download',
	URL: '<@DOWNLOADDIR@>/Pascal-Soulier-Front-End.pdf'
});
