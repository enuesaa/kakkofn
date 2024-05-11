<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'

	let text = ''
	let text2 = ''
	$: text2 = decodeURIComponent(text)
</script>

<FnPageLayout title="Url Decode">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="%E3%81%82%E3%81%82%E3%81%82" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="あああ" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
