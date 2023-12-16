<script>
  import Router from "svelte-spa-router";

  import Home from "./lib/routes/Home.svelte";
  import TagViewer from "./lib/routes/TagViewer.svelte";
  import ComponentViewer from "./lib/routes/ComponentViewer.svelte";
  import NotFound from "./lib/routes/NotFound.svelte";

  const routes = {
    "/": Home,

    "/:tagName": TagViewer,

    "/:tagName/:componentName": ComponentViewer,

    "*": NotFound,
  };
</script>

<Router {routes} />
