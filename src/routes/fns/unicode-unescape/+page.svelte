<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'

	let text = ''
	let text2 = ''
	$: {
		text2 = ''
		if (text !== '') {
			const codeunits = text.split('\\u')
			// empty string or string which does not startswith `\u`
			codeunits.shift()
			const charcodes = codeunits.map((v) => parseInt(v, 16))
			text2 = String.fromCharCode(...charcodes)
		}
	}
</script>

<FnPageLayout title="Unicode エスケープシーケンスを文字列へ">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="\u3042\u3042\u3042" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="あああ" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
