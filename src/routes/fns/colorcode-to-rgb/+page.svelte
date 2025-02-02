<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import { colorcodeToRgb } from '$lib/fns/colorcode'

	let colorcode = $state('')
	let rgb = $derived(colorcodeToRgb(colorcode))
</script>

<FnPageLayout title="カラーコードからRGBへ">
	<svelte:fragment slot="left">
		<FnTextInput bind:value={colorcode} placeholder="#ff9933" label="カラーコード" maxlength={7} />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextInput value={rgb} placeholder="rgb(255, 153, 51)" readonly label="RGB" />
		<CopyButton text={rgb} />

		<div style:background={rgb}></div>
	</svelte:fragment>
</FnPageLayout>

<style lang="postcss">
	@reference "tailwindcss/theme";

	div {
		@apply w-10 h-10 mt-3 mx-10;
	}
</style>
