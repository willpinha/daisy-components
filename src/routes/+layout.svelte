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

<div class="flex justify-center px-4 py-6">
	<div class="w-full max-w-screen-2xl">
		<slot />
	</div>
</div>
