<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ClassValue } from 'clsx';

	type IconProps = {
		icon: string;
		class?: ClassValue;
	};
	let { icon, class: className }: IconProps = $props();

	let href = $derived(`/icons.svg?at1.2#${icon}`);
</script>

{#if icon}
	<svg preserveAspectRatio="xMidYMid meet" class={cn(`m-0 !mt-0 inline-block size-4`, className)}
		><use xlink:href={href} {href} /></svg
	>
{/if}
