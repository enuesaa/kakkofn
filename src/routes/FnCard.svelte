<script lang="ts">
	export let href: string
	export let title: string
</script>

<a href={href} class="p-3 m-2 rounded-lg border-black border-2 hover:shadow-xl">
	{title}
</a>
