<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
	export let readonly: boolean = false
	export let label: string = 'テキスト'

	import { createLabel, melt } from '@melt-ui/svelte'

	const {
		elements: { root },
	} = createLabel()
</script>

<label use:melt={$root} class="mx-auto w-11/12 block font-bold">
	{label}
	<input
		bind:value
		{placeholder}
		{readonly}
		class="font-normal block rounded w-full p-3 bg-grayer text-black outline-none border-black border"
		on:focus|preventDefault={(e) => e.currentTarget.select()}
	/>
</label>
