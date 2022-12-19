<script lang="ts">
	import { PageHeader } from '$lib/components';
	import { INTRO_DATA } from './+page';

	const { TEXT } = $INTRO_DATA;
	console.log('Initialize home!');
</script>

<PageHeader />
<div class="trust-content flex flex-wrap pb-12 min-h-screen">
	<p>{@html TEXT}</p>
</div>
