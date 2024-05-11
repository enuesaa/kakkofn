<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
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
		<FnTextarea bind:value={text} placeholder={'{"a":"b"}'} label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder={'{\n  "a": "b"\n}'} readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
