<script lang="ts">
	import FnPageLayout from '../FnPageLayout.svelte'
	import FnTextInput from '$lib/components/FnTextInput.svelte'
	import FnNumberInput from '$lib/components/FnNumberInput.svelte'
	import CopyButton from '$lib/components/CopyButton.svelte'
	import { rgbToColorcode } from '$lib/fns/colorcode'

	let colorcode = '#ffffff'
	let red: string = '255'
	let green: string = '255'
	let blue: string = '255'

	$: colorcode = rgbToColorcode(red, green, blue)
</script>

<FnPageLayout title="RGBからカラーコードへ">
	<svelte:fragment slot="left">
		<FnNumberInput bind:value={red} min="0" max="255" placeholder="255" label="Red" />
		<FnNumberInput bind:value={green} min="0" max="255" placeholder="255" label="Green" />
		<FnNumberInput bind:value={blue} min="0" max="255" placeholder="255" label="Blue" />
	</svelte:fragment>

	<svelte:fragment slot="right">
		<FnTextInput bind:value={colorcode} placeholder="#ffffff" readonly label="カラーコード" />
		<CopyButton text={colorcode} />

		<div style:background={colorcode} class="w-10 h-10 mt-3 mx-10"></div>
	</svelte:fragment>
</FnPageLayout>
