<script lang="ts">
	import { PageHeader } from '$lib/components';
	import { default as TRUST_DATA } from './+page';

	const { COMPANIES } = $TRUST_DATA;
	console.log('Initialize trust!');
</script>

<PageHeader />
{#if COMPANIES}
	<div class="trust-content flex flex-wrap pb-12 min-h-screen">
		<!-- <SectionTitle sectionTitle={TITLE} /> -->
		<ul
			class="companies-list p-6 flex justify-around flex-col sm:flex-row flex-wrap w-full items-center rounded mt-4"
		>
			{#each COMPANIES as { name, logo, svg }, i}
				<li class="item my-6">
					<div class="logo">
						{@html svg}
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}
