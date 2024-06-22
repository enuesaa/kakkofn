<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { encodeBase64 } from '$lib/fns/base64-encoding'

	let text = $state('')
	let text2 = $derived(encodeBase64(text))
</script>

<FnPageLayout title="Base64 Encode">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="あああ" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder="44GC44GC44GC" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
