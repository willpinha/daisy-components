<script lang="ts">
	import themes from "../utils/themes";

	interface Props {
		tag?: string | undefined;
	}

	let { tag = undefined }: Props = $props();
</script>

<nav class="navbar bg-base-300 justify-between">
	<!-- Left side -->
	{#if tag}
		<div class="flex gap-2">
			<a href="/" class="btn btn-soft px-3">
				<i class="fa-solid fa-arrow-left-long text-2xl"></i>
			</a>

			<span class="text-xl text-primary font-bold">
				#{tag}
			</span>
		</div>
	{:else}
		<a href="/" class="btn btn-soft flex gap-2">
			<img src="/logo.svg" class="w-4" alt="Daisy Catalog" />

			<div class="flex font-bold text-lg">
				Daisy
				<span class="text-primary">Components</span>
			</div>
		</a>
	{/if}

	<!-- Right side -->
	<div class="flex gap-0 sm:gap-2">
		<!-- GitHub -->
		<a title="GitHub" target="_blank" href="https://github.com/willpinha/daisy-components" class="btn btn-soft btn-circle btn-sm">
			<i class="fa-brands fa-github text-lg"></i>
		</a>

		<!-- Themes -->
		<div class="dropdown dropdown-bottom dropdown-end">
			<div title="Themes" role="button" tabindex="0" class="btn btn-soft btn-sm">
				<i class="fa-solid fa-palette"></i>

				<i class="fa-solid fa-angle-down"></i>
			</div>

			<!-- Themes -->
			<div class="flex flex-col dropdown-content gap-2 mt-2 z-10 p-4 shadow-2xl bg-base-200 rounded-box w-64 h-72 overflow-y-scroll">
				{#each themes as theme}
					<button
						data-theme={theme}
						data-set-theme={theme}
						class="btn btn-sm bg-base-100 flex justify-between"
					>
						<span>{theme}</span>

						<div class="flex items-center gap-2">
							{#each ["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"] as bg}
								<span class="{bg} h-4 w-2 rounded-box"></span>
							{/each}
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</nav>
