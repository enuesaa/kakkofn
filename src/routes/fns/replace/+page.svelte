<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import CopyButton from '$lib/components/CopyButton.svelte'
	let text = ''
	let from = ''
	let to = ''
	let text2 = ''

	$: text2 = text.replaceAll(from, to)
</script>

<section>
	<h3 class="text-4xl font-bold m-1 text-center w-full">文字列置き換え</h3>

	<div class="flex mt-7">
		<div class="flex-1">
			<textarea
				bind:value={text}
				class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
				placeholder={'{"a":"b"}'}
			/>
			<input bind:value={from} placeholder="from" class="block mx-auto rounded w-11/12 m-3 mt-5 p-3 bg-grayer text-black outline-none border-black border" />
			<input bind:value={to} placeholder="to" class="block mx-auto rounded w-11/12 m-3 p-3 bg-grayer text-black outline-none border-black border" />
		</div>
		<div class="flex-none pt-10">
			<ArrowRightIcon />
		</div>
		<div class="flex-1 relative">
			<textarea
				bind:value={text2}
				class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
				readonly
				placeholder={'{\n  "a": "b"\n}'}
			/>
			<CopyButton text={text2} />
		</div>
	</div>
</section>
