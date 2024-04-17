<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageTitle from '$lib/components/FnPageTitle.svelte'
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
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
		<FnTextarea bind:value={text} placeholder={'{"a":"b"}'} />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder={'{\n  "a": "b"\n}'} readonly />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
