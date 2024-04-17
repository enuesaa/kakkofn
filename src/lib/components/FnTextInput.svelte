<script lang="ts">
	export let value: string = ''
	export let placeholder: string = ''
</script>

<input
	bind:value={value}
	placeholder={placeholder}
	class="block mx-auto rounded w-11/12 m-3 mt-5 p-3 bg-grayer text-black outline-none border-black border"
/>
