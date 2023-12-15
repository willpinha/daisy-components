<script>
  import { onMount } from "svelte";
  import { allComponents, selectedTag } from "./lib/utils/stores";

  import Tags from "./lib/components/Tags.svelte";
  import Examples from "./lib/components/Examples.svelte";
  import Navbar from "./lib/components/Navbar.svelte";

  onMount(async () => {
    const modules = import.meta.glob("./lib/examples/*/*.svelte");

    for (const path in modules) {
      // For paths like "./lib/examples/folder/filename"
      const [lib, templates, folder, filename] = path.slice(2).split("/");

      /**
       * @type object
       */
      const module = await modules[path]();

      const component = module.default;

      if (!$allComponents[folder]) {
        $allComponents[folder] = [component];
      } else {
        $allComponents[folder].push(component);
      }
    }
  });
</script>

<Navbar />

<div class="flex flex-col gap-8 items-center p-6">
  <Tags />
  <Examples />
</div>
