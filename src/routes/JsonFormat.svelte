<script lang="ts">
	let text = ''
	let text2 = '' // "{text}aa"

	$: {
		try {
			text2 = JSON.stringify(JSON.parse(text), null, '  ')
		} catch (e) {}
	}
</script>

<section>
	<h3 class="text-4xl font-bold my-2">JSON Format</h3>

	<div class="flex">
		<div class="flex-1">
			<textarea
				bind:value={text}
				class="mx-auto w-11/12 rounded px-3 py-2 block min-h-20 bg-grayer text-black"
			/>
		</div>
		<div class="flex-1">
			<textarea
				bind:value={text2}
				class="mx-auto w-11/12 rounded px-3 py-2 block min-h-20 bg-grayer text-black"
			/>
		</div>
	</div>
</section>
