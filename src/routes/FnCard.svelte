<script lang="ts">
	export let href: string
	export let title: string
</script>

<a {href} class="p-3 m-2 rounded-lg border-black border-2 font-zenkaku font-medium hover:shadow-xl">
	{title}
</a>
