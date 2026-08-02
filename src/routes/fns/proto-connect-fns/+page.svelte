<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte'
	import FnTextarea from '$lib/components/FnTextarea.svelte'
	import FnPageTitle from '../FnPageTitle.svelte'
	import { findFn, runChain, suggest } from './fns'

	let text = $state('')
	let steps = $state<string[]>([])
	let output = $state('')

	$effect(() => {
		const current = text
		const ids = [...steps]

		runChain(current, ids).then((result) => {
			output = result
		})
	})

	let candidates = $derived(suggest(output))

	function apply(id: string) {
		steps = [...steps, id]
	}

	function undo() {
		steps = steps.slice(0, -1)
	}

	function reset() {
		steps = []
	}
</script>

<svelte:head>
	<title>Proto Connect Fns | kakkofn | テキスト加工ツール</title>
</svelte:head>

<section>
	<FnPageTitle title="Proto Connect Fns" />

	<div class="flex mt-7">
		<div class="flex-1 relative">
			<FnTextarea bind:value={text} placeholder={'{"a":"b"}'} label="入力" />
		</div>

		<div class="flex-none w-64 px-4 pt-6">
			<p class="font-bold">つなげる</p>

			<div class="mt-2 flex flex-col gap-2">
				{#each candidates as fn (fn.id)}
					<button
						type="button"
						class="rounded-sm border border-black bg-grayer px-3 py-1 text-left hover:bg-black hover:text-white"
						onclick={() => apply(fn.id)}
					>
						{fn.label}
					</button>
				{:else}
					<p class="text-sm">入力するとボタンが出ます</p>
				{/each}
			</div>

			{#if steps.length > 0}
				<p class="mt-6 font-bold">適用中</p>
				<ol class="mt-2 text-sm">
					{#each steps as id, i (`${i}-${id}`)}
						<li>{i + 1}. {findFn(id)?.label ?? id}</li>
					{/each}
				</ol>

				<div class="mt-2 flex gap-2 text-sm">
					<button type="button" class="underline" onclick={undo}>1つ戻す</button>
					<button type="button" class="underline" onclick={reset}>リセット</button>
				</div>
			{/if}
		</div>

		<div class="flex-1 relative">
			<FnTextarea value={output} placeholder={'{\n  "a": "b"\n}'} readonly label="出力" />
			<CopyButton text={output} />
		</div>
	</div>
</section>
