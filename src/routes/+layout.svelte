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

<slot />
