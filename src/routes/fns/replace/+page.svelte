<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '$lib/components/FnPageLayout.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	let text = ''
	let from = ''
	let to = ''
	let text2 = ''

	$: text2 = text.replaceAll(from, to)
</script>

<FnPageLayout title="文字列置き換え" useArrowRightIcon>
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" />
		<FnTextInput bind:value={from} placeholder="from" />
		<FnTextInput bind:value={to} placeholder="to" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="bbb" readonly />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
