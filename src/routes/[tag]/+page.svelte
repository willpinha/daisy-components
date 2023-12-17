<script>
	export let data;

	const { tag } = data;
</script>

<div class="flex gap-2 border-b border-b-neutral">
	<a href="/" class="btn btn-ghost px-2">
		<i class="fa-solid fa-arrow-left-long text-3xl"></i>
	</a>

	<h1 class="text-4xl font-bold">#{tag}</h1>
</div>
