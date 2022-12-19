<script lang="ts">
	import { PageHeader } from '$lib/components';
	import { default as TOOLS_DATA } from './+page';

	const { LISTS } = $TOOLS_DATA;
	console.log('Initialize tools!');
</script>

<PageHeader />
{#if LISTS}	
	<div class="tools-content min-h-screen">
		<!-- <SectionTitle sectionTitle={TITLE} /> -->
		<ul class="tools-items-list list-reset mb-6 p-6 flex flex-wrap justify-center">
			{#each LISTS as item, i}
				<li class="tools-item mt-2 mr-2">
					{item}
					<!-- <Chip selectable={false} add="transition">{list}</Chip> -->
				</li>
			{/each}
		</ul>
	</div>
{/if}
