<script lang="ts">
	import FnCard from './FnCard.svelte'

	const groups = [
		{
			category: 'JSON',
			fns: [{ href: '/fns/jsonformat', title: 'JSON Format' }],
		},
		{
			category: 'エンコード / デコード / 変換',
			fns: [
				{ href: '/fns/base64encode', title: 'Base64 Encode' },
				{ href: '/fns/base64decode', title: 'Base64 Decode' },
				{ href: '/fns/urlencode', title: 'Url Encode' },
				{ href: '/fns/urldecode', title: 'Url Decode' },
				{ href: '/fns/unicode-escape', title: 'Unicode エスケープ' },
				{ href: '/fns/unicode-unescape', title: 'Unicode アンエスケープ' },
				{ href: '/fns/colorcode-to-rgb', title: 'カラーコードからRGBへ' },
				{ href: '/fns/rgb-to-colorcode', title: 'RGBからカラーコードへ' },
			],
		},
		{
			category: 'テキスト操作',
			fns: [
				{ href: '/fns/replace', title: '文字列置き換え' },
				{ href: '/fns/remove-linebreak', title: '改行削除' },
				{ href: '/fns/filter-lines', title: '特定文字列を含む行を抽出' },
				{ href: '/fns/repeat-text', title: '文字列繰り返し' },
				{ href: '/fns/split-text', title: '文字列分割' },
			],
		},
		{
			category: 'カウント',
			fns: [
				{ href: '/fns/count', title: '文字数カウント' },
				{ href: '/fns/count-lines', title: '行数カウント' },
				{ href: '/fns/text-search-count', title: '文字列の登場回数' },
			],
		},
		{
			category: '生成',
			fns: [{ href: '/fns/generate-uuid', title: 'UUID生成' }],
		},
	]
</script>

<svelte:head>
	<title>kakkofn | テキスト加工ツール</title>
</svelte:head>

{#each groups as group}
	<section class="mb-4">
		<h2 class="font-zenkaku font-bold px-4 pt-2 text-lg">{group.category}</h2>
		<div class="flex p-2 flex-wrap">
			{#each group.fns as fn}
				<FnCard href={fn.href} title={fn.title} />
			{/each}
		</div>
	</section>
{/each}
