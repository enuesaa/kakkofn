<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons'
	import CopyButton from './CopyButton.svelte'
	let text = ''
	let text2 = ''

	$: {
		try {
			text2 = JSON.stringify(JSON.parse(text), null, '  ')
		} catch (e) {}
	}
</script>

<section>
	<h3 class="text-4xl font-bold m-1 text-center w-full">JSON Format</h3>

	<div class="flex mt-7">
		<div class="flex-1">
			<textarea
				bind:value={text}
				class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
				placeholder={'{"a":"b"}'}
			/>
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
