<script lang="ts">
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'

	let text = ''
	let count: number = 0
	$: count = text.length
</script>

<FnPageLayout title="文字数カウント">
	<svelte:fragment slot="left">
		<textarea
			bind:value={text}
			class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
			placeholder="aaa"
		/>
	</svelte:fragment>

	<svelte:fragment slot="right">
		<div class="text-5xl pl-5 pt-5">
			{count}
		</div>
	</svelte:fragment>
</FnPageLayout>
