<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'
	let text = ''
	let from = ''
	let to = ''
	let text2 = ''

	$: text2 = text.replaceAll(from, to)
</script>

<FnPageLayout title="文字列置き換え" useArrowRightIcon>
	<svelte:fragment slot="left">
		<textarea
			bind:value={text}
			class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
			placeholder={'{"a":"b"}'}
		/>
		<input bind:value={from} placeholder="from" class="block mx-auto rounded w-11/12 m-3 mt-5 p-3 bg-grayer text-black outline-none border-black border" />
		<input bind:value={to} placeholder="to" class="block mx-auto rounded w-11/12 m-3 p-3 bg-grayer text-black outline-none border-black border" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<textarea
			bind:value={text2}
			class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
			readonly
			placeholder={'{\n  "a": "b"\n}'}
		/>
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
