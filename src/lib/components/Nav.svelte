<script lang="ts">
	import { page } from '$app/stores';
	import { NAVBAR_DATA } from '$siteData';
	let currentPathName = '';
	$: ({ url, routeId } = $page);
	$: currentPathName = url.pathname;
</script>

<nav>
	<ul class="flex space-x-4">
		{#each $NAVBAR_DATA as { pathName, name }, i}
			<li class="px-3 py-4 rounded-md text-sm font-medium {currentPathName === pathName ? 'current' : ''}">
				{#if currentPathName === pathName}
					<span>{name}</span>
				{:else}
				<a href="{pathName}" class="link">{name}</a>
					<!-- <a href="/{name == $NAVBAR_DATA[0].name ? '' : name}" class="link">{name}</a> -->
				{/if}
			</li>
		{/each}
	</ul>
</nav>
