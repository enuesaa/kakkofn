<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
	export let readonly: boolean = false
	export let label: string = 'テキスト'
	export let maxlength: undefined | number = undefined
</script>

<label class="mx-auto w-11/12 block font-bold my-1">
	{label}
	<input
		type="text"
		class="font-normal block rounded w-full p-3 bg-grayer text-black outline-hidden border-black border"
		bind:value
		{placeholder}
		{readonly}
		{maxlength}
		on:focus|preventDefault={(e) => e.currentTarget.select()}
	/>
</label>
