<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { replaceText } from '$lib/fns/replace-text'

	let text = ''
	let from = ''
	let to = ''
	let text2 = ''

	$: text2 = replaceText(text, from, to)
</script>

<FnPageLayout title="文字列置き換え" useArrowRightIcon>
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" label="入力" />
		<FnTextInput bind:value={from} placeholder="a" label="from" />
		<FnTextInput bind:value={to} placeholder="b" label="to" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="bbb" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
