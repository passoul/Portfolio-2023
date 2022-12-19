<script lang="ts">
	export let loadComponent: any;
</script>

{#await loadComponent()}
	<slot name="loading">Loading...</slot>
{:then { default: Component }}
	<Component />
{/await}
