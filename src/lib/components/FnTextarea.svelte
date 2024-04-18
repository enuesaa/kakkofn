<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
	export let readonly: boolean = false
	export let label: string = 'テキスト'

	import { createLabel, melt } from '@melt-ui/svelte'

	const {
		elements: { root }
	} = createLabel()
</script>

<label use:melt={$root} class="mx-auto w-11/12 block font-bold">
	{label}
	<textarea
		bind:value
		class="font-normal w-full rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
		{placeholder}
		{readonly}
	/>
</label>
