<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import { removeLineBreak } from '$lib/fns/remove-linebreak'

	let text = ''
	let text2 = ''
	$: text2 = removeLineBreak(text)
</script>

<FnPageLayout title="改行削除">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" label="テキスト" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="aaa" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
