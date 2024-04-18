<script lang="ts">
	export let text: string

	import { createTooltip, melt } from '@melt-ui/svelte'
	import { fade } from 'svelte/transition'
	import { CopyIcon } from 'svelte-feather-icons'

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeOnPointerDown: false
	})

	async function copy() {
		await globalThis.navigator.clipboard.writeText(text)
	}
</script>

<button type="button" class="absolute right-9 top-8" use:melt={$trigger} on:click|preventDefault={copy}>
	<CopyIcon />
</button>

{#if $open}
	<div use:melt={$content} transition:fade={{ duration: 100 }} class="z-10 bg-grayer shadow-xl">
		<div use:melt={$arrow} />
		<p class="px-4 py-1">Copy</p>
	</div>
{/if}
