<script lang="ts">
	export let tag: string;
	export let example: string;
    export let html: string;

	// Lower camel case to lower case with spaces
	function convertExampleName(name: string): string {
		return name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
	}
</script>

<li>
	<div class="timeline-middle flex">
		<i class="fa-regular fa-folder-open"></i>
	</div>

	<div class="timeline-start w-full flex flex-col gap-4">
		<span class="text-accent font-mono italic self-start">
			{convertExampleName(example)}
        </span>

		<div role="tablist" class="tabs tabs-lifted pb-4">
			<input
				type="radio"
				name="{example}"
				role="tab"
				class="tab"
				aria-label="Preview"
				checked
			/>
			<div role="tabpanel" class="tab-content border-base-300 rounded-box p-3 overflow-x-auto">
				{@html html}
			</div>

            <a target="_blank" href="https://github.com/willpinha/daisy-collection/blob/master/src/examples/{tag}/{example}.html" class="tab">
                Code
            </a>

            <a target="_blank" href="/playground/{tag}/{example}" class="tab">Playground</a>
		</div>
	</div>

	<hr class="bg-base-200"/>
</li>
