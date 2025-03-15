<script lang="ts">
    interface Props {
        html: string;
    }

    let { html }: Props = $props();
</script>

{@html html}
