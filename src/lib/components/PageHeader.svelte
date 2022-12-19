<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { NAVBAR_DATA } from '$siteData';

	// Set by default to home
	let currentTitle: string = $NAVBAR_DATA[0].description;
	let currentDescription: string = $NAVBAR_DATA[0].description;

	onMount(() => {
		const pageID = $page.routeId!;

		if (pageID != '') {
			const index = $NAVBAR_DATA.findIndex((item) => item.name === pageID);
			currentTitle = $NAVBAR_DATA[index].title;
			currentDescription = $NAVBAR_DATA[index].description;
		}
	});
</script>

<svelte:head>
	<title>{currentTitle}</title>
	<meta name="description" content={currentDescription} />
</svelte:head>
