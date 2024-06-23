<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { encodeUrl } from '$lib/fns/url-encoding'

	let text = $state('')
	let text2 = $derived(encodeUrl(text))
</script>

<FnPageLayout title="Url Encode">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="あああ" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder="%E3%81%82%E3%81%82%E3%81%82" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
