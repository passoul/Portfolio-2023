<script lang="ts">
	import { PageHeader } from '$lib/components';
	import { default as SKILLS_DATA } from './+page';

	const { LISTS } = $SKILLS_DATA;
	console.log('Initialize skills!');
</script>

<PageHeader />
{#if LISTS}	
	<div class="skills-content flex flex-wrap min-h-screen">
		<!-- <SectionTitle sectionTitle="{TITLE}" /> -->
		{#each LISTS as { cat_title, cat_items }, index}
			<div class="cat-box w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
				class="cat-title w-full font-bold text-xl text-gray-800 px-6 capitalize mb-8 text-center dark:text-gray-100"
				>
					{cat_title}
				</div>
				<ul class="cat_item-list">
					{#each cat_items as { name, level }, i}
					<li class="cat-item mb-6 flex items-center">
						<!-- <SkillProgress value={level} name={name}/> -->
					</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
{/if}
