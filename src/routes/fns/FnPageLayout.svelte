<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte'
	import FnPageTitle from './FnPageTitle.svelte'

	export let title: string
	export let hideArrowRightIcon: boolean = false
</script>

<svelte:head>
	<title>{title} | kakkofn | テキスト加工ツール</title>
</svelte:head>

<section>
	<FnPageTitle {title} />

	<div class="flex mt-7">
		<div class="flex-1 relative">
			<slot name="left" />
		</div>

		{#if !hideArrowRightIcon}
			<div class="flex-none pt-10">
				<ArrowRightIcon />
			</div>
		{/if}

		<div class="flex-1 relative">
			<slot name="right" />
		</div>
	</div>
</section>
