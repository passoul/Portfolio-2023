import { readable } from 'svelte/store';
import { adjust, moonO, sunO } from 'svelte-awesome/icons';

export const DEFAULT_THEME = readable({id: 0, label: 'System', value: 'system', icon: adjust});
export const THEME_SWITCH_ITEMS = readable([
	{id: 1, label: 'Dark', value: 'dark', icon: moonO},
	{id: 2, label: 'Light', value: 'light', icon: sunO},
]);

export const NAVBAR_DATA = readable([
	{ id: 1, name: 'home', icon: 'bar-chart', title: 'home', description: 'Welcome', pathName: '/' },
	{ id: 2, name: 'skills', icon: 'bar-chart', title: 'Skills', description: 'My skills', pathName: '/skills' },
	{ id: 3, name: 'tools', icon: 'wrench', title: 'Tools', description: 'My tools', pathName: '/tools' },
	{ id: 4, name: 'trust', icon: 'handshake-o', title: 'They trust me / They needed my expertise', description: 'I worked with', pathName: '/trust' },
	{ id: 5, name: 'download', icon: 'file-pdf-o', title: 'My cv', description: 'My cv', pathName: '/download' }
]);

export const SOCIAL_DATA = readable({
	LISTS: [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/',
			profil: 'in/pascal-soulier-a52bb983/',
			rel: 'external',
			target: '_target'
		},
		{
			name: 'twitter',
			url: 'https://twitter.com/',
			profil: 'Sp_Devfront',
			rel: 'external',
			target: '_target'
		}
	]
});

export const COPYRIGHT_DATA = readable({
	TEXT: 'copyright © pascal Soulier 2022'
});
