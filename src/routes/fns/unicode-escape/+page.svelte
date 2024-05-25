<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'

	let text = ''
	let text2 = ''
	$: {
		// see https://jsprimer.net/basic/string-unicode/
		text2 = ''
		for (let t of Array.from(text)) {
			for (let i = 0; i < t.length; i++) {
				text2 += `\\u${t.charCodeAt(i).toString(16)}`
			}
		}
	}
</script>

<FnPageLayout title="文字列をUnicode エスケープシーケンスへ">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="あああ" label="入力" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextarea bind:value={text2} placeholder="\\u3042\\u3042\\u3042" readonly label="出力" />
		<CopyButton text={text2} />
	</svelte:fragment>
</FnPageLayout>
