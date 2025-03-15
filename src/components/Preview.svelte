<script lang="ts">
	interface Props {
		tag: string;
		example: string;
		html: string;
	}

	let { tag, example, html }: Props = $props();

	// Lower camel case to lower case with spaces
	function convertExampleName(name: string): string {
		return name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
	}
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-2">
		<i class="fa-solid fa-file"></i>

		<span class="text-accent font-mono italic self-start">
			{convertExampleName(example)}
		</span>
	</div>

	<div role="tablist" class="tabs tabs-lift pb-4">
		<input
			type="radio"
			name="{example}"
			role="tab"
			class="tab"
			aria-label="Preview"
			checked
		/>
		<div role="tabpanel" class="resize-y tab-content border-base-300 rounded-box p-3 overflow-x-auto">
			{@html html}
		</div>

		<a target="_blank" href="https://github.com/willpinha/daisy-components/blob/master/src/collection/{tag}/{example}.html" class="tab">
			Code
		</a>

		<a target="_blank" href="/playground/{tag}/{example}" class="tab">Playground</a>
	</div>
</div>
