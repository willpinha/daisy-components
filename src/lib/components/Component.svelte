<script>
	/**
	 * @type {import("svelte").ComponentType}
	 */
	export let component;
</script>

<div class="p-6 border border-neutral rounded-box">
	<svelte:component this={component}></svelte:component>
</div>
