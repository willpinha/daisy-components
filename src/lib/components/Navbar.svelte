<script>
	import themes from '$lib/data/themes';
	import logo from '$lib/assets/logo.svg';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { isDarker, darkThemes } from '$lib/utils/theme';

	onMount(() => {
		themeChange(false);
	});
</script>

<nav class="navbar bg-base-300 justify-between">
	<!-- Left side -->
	<a href="/" class="btn btn-ghost flex gap-2">
		<img src={logo} class="w-4 sm:w-6" alt="Daisy Catalog" />

		<div class="flex font-bold text-xl sm:text-2xl">
			Daisy
			<span class="text-primary">Catalog</span>
		</div>
	</a>

	<!-- Right side -->
	<div class="flex gap-0 sm:gap-2">
		<!-- GitHub -->
		<a target="_blank" href="https://github.com/willpinha/daisy-catalog" class="btn btn-ghost">
			<i class="fa-brands fa-github text-lg"></i>
			<span class="hidden sm:flex">GitHub</span>
		</a>

		<!-- Themes -->
		<details class="dropdown dropdown-bottom dropdown-end">
			<summary class="btn btn-ghost">
				<i class="fa-solid fa-palette"></i>
				<span class="hidden sm:flex">Themes</span>

				<i class="fa-solid fa-angle-down"></i>
			</summary>

			<div
				class="flex flex-col dropdown-content gap-2 mt-2 z-[1] p-4 shadow-2xl bg-base-200 rounded-box w-64 h-72 overflow-y-scroll"
			>
				{#each themes as theme}
					<button
						data-theme={theme}
						data-set-theme={theme}
						on:click={() => $isDarker = darkThemes.includes(theme)}
						class="btn btn-sm bg-base-100 flex justify-between"
					>
						<span>{theme}</span>

						<div class="flex items-center gap-2">
							{#each ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'] as bg}
								<span class="{bg} h-4 w-2 rounded-box"></span>
							{/each}
						</div>
					</button>
				{/each}
			</div>
		</details>
	</div>
</nav>
