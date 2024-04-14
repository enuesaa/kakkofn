<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte'

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: 'indeterminate'
	})
</script>

<button use:melt={$root} id="checkbox">
	{#if $isIndeterminate}
		a
	{:else if $isChecked}
		b
	{/if}
	<input use:melt={$input} />
</button>
<label for="checkbox">check this</label>
