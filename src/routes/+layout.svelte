<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	import Navbar from '$lib/components/Navbar.svelte';

	/**
	 * @param {Document} document
	 */
	function initDataTheme(document) {
		document.documentElement.setAttribute('data-theme', '');
	}
</script>

<svelte:document use:initDataTheme />

<Navbar />

<div class="flex justify-center p-6">
	<div class="w-full lg:w-4/5 max-w-6xl">
		<slot />
	</div>
</div>
