<script lang="ts">
	import ModeSwitcher from '$lib/components/mode-switcher.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<ModeSwitcher />
{@render children()}
