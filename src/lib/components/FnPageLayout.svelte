<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import FnPageTitle from "$lib/components/FnPageTitle.svelte"

	export let title: string
	export let useArrowRightIcon: boolean = false
</script>

<section>
	<FnPageTitle {title} />

	<div class="flex mt-7">
		<div class="flex-1">
			<slot name="left" />
		</div>

		{#if useArrowRightIcon}
		<div class="flex-none pt-10">
			<ArrowRightIcon />
		</div>
		{/if}

		<div class="flex-1 relative">
			<slot name="right" />
		</div>
	</div>
</section>
