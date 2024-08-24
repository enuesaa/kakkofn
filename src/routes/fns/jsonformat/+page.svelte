<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { jsonFormat } from '$lib/fns/json-format'

	let text = $state('')
	let text2 = $derived(jsonFormat(text))
</script>

<FnPageLayout title="JSON Format">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder={'{"a":"b"}'} label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder={'{\n  "a": "b"\n}'} readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
