<script lang="ts">
	let text = ''
	let count: number = 0
	$: count = text.length
</script>

<section>
	<h3 class="text-4xl font-bold m-1 text-center w-full">文字数カウント</h3>

	<div class="flex mt-7">
		<div class="flex-1">
			<textarea
				bind:value={text}
				class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
				placeholder="aaa"
			/>
		</div>
		<div class="flex-1 text-5xl pl-5 pt-5">
			{count}
		</div>
	</div>
</section>
