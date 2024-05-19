<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte'

	export let value: string = ''
	export let min: string = '0'
	export let max: string = '10000'
	export let placeholder: string = ''
	export let readonly: boolean = false
	export let label: string = 'テキスト'

	const {
		elements: { root },
	} = createLabel()
</script>

<label use:melt={$root} class="mx-auto w-11/12 block font-bold my-1">
	{label}
	<input
		type="number"
		bind:value
		{min}
		{max}
		{placeholder}
		{readonly}
		class="font-normal block rounded w-full p-3 bg-grayer text-black outline-none border-black border"
		on:focus|preventDefault={(e) => e.currentTarget.select()}
	/>
</label>
