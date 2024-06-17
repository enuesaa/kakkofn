<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import { searchTextCount } from '$lib/fns/search-text-count'

	let text = ''
	let searchText = ''
	let count: number = 0
	$: count = searchTextCount(text, searchText)
</script>

<FnPageLayout title="文字列の登場回数">
	<svelte:fragment slot="left">
		<FnTextarea bind:value={text} placeholder="aaa" label="テキスト" />
		<FnTextInput bind:value={searchText} placeholder="a" label="検索文字列" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<div class="text-5xl pl-5 pt-5">
			{count}
		</div>
	</svelte:fragment>
</FnPageLayout>
