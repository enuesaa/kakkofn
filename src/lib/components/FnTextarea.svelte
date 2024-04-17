<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
	export let readonly: boolean = false
</script>

<textarea
	bind:value={value}
	class="mx-auto w-11/12 rounded px-3 py-2 block h-80 bg-grayer text-black outline-none border-black border"
	placeholder={placeholder}
	readonly={readonly}
/>
