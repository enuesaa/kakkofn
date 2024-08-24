<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { countLines } from '$lib/fns/count-lines'

	let text = $state('')
	let count = $derived(countLines(text))
</script>

<FnPageLayout title="行数カウント" hideArrowRightIcon>
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<div class="text-5xl pl-5 pt-5">
			{count}
		</div>
	</svelte:fragment>
</FnPageLayout>
