<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { Nav, Transition } from '$lib/components';
	import { COPYRIGHT_DATA, NAVBAR_DATA } from '$siteData';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import LazyLoad from '$lib/components/LazyLoad.svelte';
	import LoadComponent from '$lib/components/LoadComponent.svelte';

	export let url: URL;

	const { TEXT } = $COPYRIGHT_DATA;
	const navList = $NAVBAR_DATA;
	$: ({ url, routeId } = $page);
</script>

<div class="app">
	<header class="flex justify-center content-center items-center">
		<Nav />
		<ThemeSwitch />
	</header>
	<main>
		{#each navList as navItem (navItem.id)}
			<LazyLoad let:hasBeenVisible id={navItem.name}>
				<Transition {hasBeenVisible}>
					<LoadComponent
						loadComponent={() =>
							navItem.name === 'home'
								? import('./+page.svelte')
								: import(`./${navItem.name}/+page.svelte`)}
					>
						<div slot="loading">Loading...</div>
					</LoadComponent>
				</Transition>
			</LazyLoad>
		{/each}
	</main>

	<footer>
		<div>
			<p>{TEXT}</p>
		</div>
	</footer>
</div>
