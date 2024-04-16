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
	<textarea bind:value={text} class="h-40 w-[240px] rounded bg-white px-3 py-2 block" />
	<textarea bind:value={text2} class="h-40 w-[240px] rounded bg-white px-3 py-2 block" />
</section>
