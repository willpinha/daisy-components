<script>
	/**
	 * @type {import("svelte").ComponentType}
	 */
	export let component;
</script>

<div class="relative p-6 border border-neutral rounded-box">
	<svelte:component this={component}></svelte:component>
</div>
