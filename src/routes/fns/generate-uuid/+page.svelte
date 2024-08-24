<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'

	let text = $state(crypto.randomUUID())
</script>

<FnPageLayout title="UUIDを生成">
	<svelte:fragment slot="right">
		<FnTextInput value={text} placeholder={`a\naa`} readonly label="出力" />
		<CopyButton text={text} />
	</svelte:fragment>
</FnPageLayout>
