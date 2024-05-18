<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'

	let colorcode = ''
	let rgb: string = ''
	$: {
		if (colorcode.length === 6) {
			const red = parseInt(colorcode.slice(0,2), 16)
			const green = parseInt(colorcode.slice(2,4), 16)
			const blue = parseInt(colorcode.slice(4,6), 16)
			if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
				rgb = `rgb(${red}, ${green}, ${blue})`
			}
		} else if (colorcode.length === 7 && colorcode.at(0) === '#') {
			const red = parseInt(colorcode.slice(1,3), 16)
			const green = parseInt(colorcode.slice(3,5), 16)
			const blue = parseInt(colorcode.slice(5,7), 16)
			if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
				rgb = `rgb(${red}, ${green}, ${blue})`
			}
		} else {
			rgb = ''
		}
	}
</script>

<FnPageLayout title="カラーコードからRGBへ">
	<svelte:fragment slot="left">
		<FnTextInput bind:value={colorcode} placeholder='ff9933' label='カラーコード' />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextInput bind:value={rgb} placeholder="rgb(255, 153, 51)" readonly label="RGB" />
		<CopyButton text={rgb} />

		<div style:background={rgb} />
	</svelte:fragment>
</FnPageLayout>

<style lang="postcss">
	div {
		@apply w-10 h-10 mt-3 mx-10;
	}
</style>
