<script lang="ts">
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'

	let text = ''
	let count: number = 0
	$: count = text.length
</script>

<FnPageLayout title="文字数カウント">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<div class="text-5xl pl-5 pt-5">
			{count}
		</div>
	</svelte:fragment>
</FnPageLayout>
