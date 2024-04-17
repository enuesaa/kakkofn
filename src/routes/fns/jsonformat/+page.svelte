<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageTitle from '$lib/components/FnPageTitle.svelte'
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'
	let text = ''
	let text2 = ''

	$: {
		try {
			text2 = JSON.stringify(JSON.parse(text), null, '  ')
		} catch (e) {}
	}
</script>

<FnPageLayout title="JSON Format" useArrowRightIcon>
	<svelte:fragment slot="left">
		<textarea
			bind:value={text}
			class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
			placeholder={'{"a":"b"}'}
		/>
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
