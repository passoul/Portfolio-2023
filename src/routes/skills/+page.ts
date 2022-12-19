import { readable } from 'svelte/store';

export default readable({
	LISTS: [
		{
			cat_title: 'programming languages',
			cat_items: [
				{
					name: 'html',
					level: 80
				},
				{
					name: 'css',
					level: 75
				},
				{
					name: 'javascript',
					level: 65
				},
				{
					name: 'accessibility',
					level: 60
				}
			]
		},
		{
			cat_title: 'frameworks and library',
			cat_items: [
				{
					name: 'sass',
					level: 70
				},
				{
					name: 'less',
					level: 65
				},
				{
					name: 'jquery',
					level: 75
				},
				{
					name: 'vue',
					level: 50
				},
				{
					name: 'angular',
					level: 55
				},
				{
					name: 'react',
					level: 45
				},
				{
					name: 'svelte',
					level: 65
				}
			]
		}
	]
});
