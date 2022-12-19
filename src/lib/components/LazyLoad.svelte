<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;
	let el: Element;
	let visible = false;
	let hasBeenVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			visible = entries[0].isIntersecting;
			hasBeenVisible = hasBeenVisible || visible;
		});
		observer.observe(el);

		return () => observer.unobserve(el);
	});
</script>

<section bind:this={el} class="min-h-screen" {id}>
	<slot {visible} {hasBeenVisible} />
</section>
