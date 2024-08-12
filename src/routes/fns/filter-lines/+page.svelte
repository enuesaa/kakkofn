<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { filterLines } from '$lib/fns/filter-lines'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'

	let text = $state('')
	let searching = $state('')
	let text2 = $derived(filterLines(text, searching))
</script>

<FnPageLayout title="特定文字列を含む行を抽出">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder={`a\naaa\nbbb`} label="テキスト" />
		<FnTextInput bind:value={searching} placeholder="a" label="検索文字列" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder={`a\naa`} readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
