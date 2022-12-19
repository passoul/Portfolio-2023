<script lang="ts">
	import { PageHeader } from '$lib/components';
	import { default as CV_DATA } from './+page';
	import Icon from 'svelte-awesome';
	import { download } from 'svelte-awesome/icons';

	const { NAME, BTNTEXT, URL } = $CV_DATA;
	console.log('Initialize download!');
</script>

<PageHeader />

{#if $CV_DATA}
	<div class="cv-content min-h-screen">
		<!-- <SectionTitle sectionTitle={TITLE} /> -->
		<div class="mx-auto flex justify-center my-6 py-4 px-8">
			<!-- <Button href={URL} remove="font-medium" add="flex flex-wrap text-black"> -->
			<Icon data={download} scale={1.2} />
			<div class="ml-2">
				{BTNTEXT}
			</div>
			<!-- </Button> -->
		</div>
	</div>
{/if}
