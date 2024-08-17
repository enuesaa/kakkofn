<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnNumberInput from '$lib/components/FnNumberInput.svelte'
	import { repeatText } from '$lib/fns/repeat-text'

	let text = $state('')
	let count = $state('10')
	let text2 = $derived(repeatText(text, Number(count)))
</script>

<FnPageLayout title="文字列繰り返し">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="a" label="テキスト" />
		<FnNumberInput bind:value={count} min="1" max="255" placeholder="10" label="繰り返す回数" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder="aaaaaaaaaa" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
