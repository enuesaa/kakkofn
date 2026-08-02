<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import { yamlFormat } from '$lib/fns/yaml-format'

	let text = $state('')
	let text2 = $state('')

	$effect(() => {
		yamlFormat(text).then((result) => {
			text2 = result
		})
	})
</script>

<FnPageLayout title="YAML Format">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder={'- a\n-  b'} label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea value={text2} placeholder={'- a\n- b'} readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
