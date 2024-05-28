<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
	export let readonly: boolean = false
	export let label: string = 'テキスト'
	export let maxlength: undefined|number = undefined
</script>

<label class="mx-auto w-11/12 block font-bold my-1">
	{label}
	<input
		type="text"
		bind:value
		{placeholder}
		{readonly}
		{maxlength}
		class="font-normal block rounded w-full p-3 bg-grayer text-black outline-none border-black border"
		on:focus|preventDefault={(e) => e.currentTarget.select()}
	/>
</label>
