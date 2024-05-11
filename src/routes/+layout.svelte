<script lang="ts">
	import './app.css'
	import Header from './Header.svelte'
</script>

<svelte:head>
	<title>kakkofn | テキスト加工ツール</title>
</svelte:head>

<Header />

<main class="container mx-auto">
	<slot />
</main>
