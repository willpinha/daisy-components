<script lang="ts">
    import { onMount } from "svelte";

	export let tag: string;
	export let example: string;
    export let html: string;

	let preview: HTMLElement;

	// Lower camel case to lower case with spaces
	function convertExampleName(name: string): string {
		return name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
	}

	onMount(() => {
		const hasScrolling = preview.scrollHeight > preview.clientHeight;

		if (hasScrolling) {
			// Prevents vertical scrolling
			preview.style.height = 40 + preview.scrollHeight + "px";
		}
	});
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-2">
		<i class="fa-solid fa-file"></i>

		<span class="text-accent font-mono italic self-start">
			{convertExampleName(example)}
		</span>
	</div>

	<div role="tablist" class="tabs tabs-lifted pb-4">
		<input
			type="radio"
			name="{example}"
			role="tab"
			class="tab"
			aria-label="Preview"
			checked
		/>
		<div bind:this={preview} role="tabpanel" class="flex tab-content border-base-300 rounded-box p-3 overflow-x-auto">
			{@html html}
		</div>

		<a target="_blank" href="https://github.com/willpinha/daisy-components/blob/master/src/collection/{tag}/{example}.html" class="tab">
			Code
		</a>

		<a target="_blank" href="/daisy-components/playground/{tag}/{example}" class="tab">Playground</a>
	</div>
</div>
