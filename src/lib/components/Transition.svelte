<script lang="ts">
	import type { PageTransitionDuration } from '$lib/types';
	import { fade, fly } from 'svelte/transition';

	export let hasBeenVisible: Boolean;
	const pageTransitionDuration: PageTransitionDuration = 500;
</script>

{#if hasBeenVisible}
	<div in:fly={{ y: 100, duration: 500, delay: pageTransitionDuration }}>
		<slot />
	</div>
{:else}
	<div transition:fade>Loading...</div>
{/if}
