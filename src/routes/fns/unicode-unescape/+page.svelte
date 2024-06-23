<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { unescapeUnicode } from '$lib/fns/unicode-escaping'

	let text = $state('')
	let text2 = $derived(unescapeUnicode(text))
</script>

<FnPageLayout title="Unicode エスケープシーケンスを文字列へ">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="\u3042\u3042\u3042" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder="あああ" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
