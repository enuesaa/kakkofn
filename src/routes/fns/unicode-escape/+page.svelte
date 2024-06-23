<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { escapeUnicode } from '$lib/fns/unicode-escaping'

	let text = $state('')
	let text2 = $derived(escapeUnicode(text))
</script>

<FnPageLayout title="文字列をUnicode エスケープシーケンスへ">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="あああ" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder="\u3042\u3042\u3042" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
