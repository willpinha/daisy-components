<script>
	import Router from "svelte-spa-router";

	import Home from "./lib/routes/Home.svelte";
	import TagViewer from "./lib/routes/TagViewer.svelte";
	import ComponentViewer from "./lib/routes/ComponentViewer.svelte";
	import NotFound from "./lib/routes/NotFound.svelte";

	import { theme } from "./lib/utils/stores";

	/**
	 * Sync the "data-theme" document attribute and the "theme" local storage key
	 *
	 * @param {Document} document
	 * @param {string} theme
	 */
	function syncTheme(document, theme) {
		document.documentElement.setAttribute("data-theme", theme);

		return {
			/**
			 * @param {string} theme
			 */
			update(theme) {
				document.documentElement.setAttribute("data-theme", theme);
			},
		};
	}

	const routes = {
		"/": Home,

		"/:tagName": TagViewer,

		"/:tagName/:componentName": ComponentViewer,

		"*": NotFound,
	};
</script>

<svelte:document use:syncTheme={$theme} />

<Router {routes} />
