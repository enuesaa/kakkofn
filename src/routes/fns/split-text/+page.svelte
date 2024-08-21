<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import { splitText } from '$lib/fns/split-text'
	import FnTextInput from '$lib/components/FnTextInput.svelte'

	let text = $state('')
	let sep = $state(',')
	let text2 = $derived(splitText(text, sep))
</script>

<FnPageLayout title="文字列分割">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="a,b,c" label="テキスト" />
		<FnTextInput bind:value={sep} placeholder="," label="分割文字列" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder={`a\nb\nc`} readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
