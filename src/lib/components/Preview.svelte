<script lang="ts">
	import Highlight from "svelte-highlight";
	import type { TagExample } from "$lib/tags";
	import language from "svelte-highlight/languages/xml";
	import themeDark from "svelte-highlight/styles/atom-one-dark";
	import themeLight from "svelte-highlight/styles/atom-one-light";
	import { isDarker } from "$lib/utils/theme";

	export let tag: string;
	export let example: TagExample;

	let codeTabSelected: boolean = false;
	let copied: boolean = false;

	function copyHTML() {
		navigator.clipboard.writeText(example.html);	
		copied = true;
	}

	function verifyCopied() {
		if (copied) {
			copied = false;
		}
	}

	// Lower camel case to lower case with spaces
	function convertExampleName(name: string): string {
		return name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
	}
</script>

<svelte:head>
	{#if $isDarker}
		{@html themeDark}
	{:else}
		{@html themeLight}
	{/if}
</svelte:head>

<li>
	<div class="timeline-middle flex">
		<i class="fa-regular fa-folder-open"></i>
	</div>

	<div class="timeline-start w-full flex flex-col gap-4">
		<a
			href="https://github.com/willpinha/daisy-collection/blob/master/examples/{tag}/{example.name}.html"
			class="link link-accent font-mono italic self-start"
			target="_blank"
			title="Edit source code"
		>
			{convertExampleName(example.name)}
		</a>

		<div role="tablist" class="tabs tabs-lifted pb-4">
			<input
				on:click={() => codeTabSelected = false}
				type="radio"
				name="{example.name}"
				role="tab"
				class="tab"
				aria-label="Preview"
				checked
			/>
			<div role="tabpanel" class="tab-content border-base-300 rounded-box p-3">
				{@html example.html}
			</div>

			<input
				on:click={() => codeTabSelected = true}
				type="radio"
				name="{example.name}"
				role="tab"
				class="tab [--tab-bg:oklch(var(--b3))]"
				aria-label="Code"
			/>
			<div role="tabpanel" class="tab-content text-sm overflow-x-scroll relative">
				<div class="absolute right-2 top-2">
					<div class="tooltip tooltip-left" data-tip="{copied ? 'Copied!' : 'Copy'}">
						<button class="btn btn-ghost btn-sm" on:click={copyHTML} on:mouseleave={verifyCopied}>
							<i class="{copied ? 'fa-solid text-primary' : 'fa-regular'} fa-copy text-lg"></i>
						</button>
					</div>
				</div>

				<Highlight {language} code={example.html}/>
			</div>

			<a href="/playground/{tag}/{example.name}" target="_blank" class="flex gap-1 tab">
				<i class="fa-solid fa-arrow-up-right-from-square"></i>
				Playground
			</a>
		</div>
	</div>

	<hr class="bg-base-200"/>
</li>

<style lang="postcss">
	:global(code) {
		@apply rounded-lg !bg-base-300;
	}
</style>
