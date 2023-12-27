<script lang="ts">
	import Highlight from "svelte-highlight";
	import type { TagExample } from "$lib/tags";
	import language from "svelte-highlight/languages/xml";
	import theme from "svelte-highlight/styles/base16-ir-black";

	export let example: TagExample;

	let codeTabSelected: boolean = false;
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<div class="flex flex-col gap-2">
	<h2 class="text-sm font-bold">{example.name}</h2>

	<div role="tablist" class="tabs tabs-lifted">
		<input
			on:click={() => codeTabSelected = false}
			type="radio"
			name="{example.name}"
			role="tab"
			class="tab"
			aria-label="Preview"
			checked
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			{@html example.html}
		</div>

		<input
			on:click={() => codeTabSelected = true}
			type="radio"
			name="{example.name}"
			role="tab"
			class="tab [--tab-bg:oklch(var(--n))]"
			aria-label="Code"
			class:[--tab-color:oklch(var(--nc))]={codeTabSelected}
			class:[--tab-color:oklch(var(--bc))]={!codeTabSelected}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box text-sm overflow-x-scroll">
			<Highlight {language} code={example.html}/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(code) {
		@apply rounded-lg !bg-neutral;
	}
</style>
