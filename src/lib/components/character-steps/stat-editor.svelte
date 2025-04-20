<script lang="ts">
	import { characters } from '$lib/character-manager.svelte';
	import { allStats } from '$lib/models/character';
	import PlusPicker from '../plus-picker.svelte';

	let totalBonuses = $derived(
		characters.active
			? Object.entries(characters.active.stats).reduce((p, [_, value]) => p + value, 0)
			: 0
	);
</script>

<p class="text-muted-foreground mb-4 text-sm">
	Your class and traits determine 4 bonuses. Distribute 2 remaining stat bonuses. No stat can exceed
	(+++).
</p>
{#if characters.active}
	<div class="grid grid-cols-2 gap-3">
		{#each allStats as stat}
			<div class="flex items-center gap-4 rounded border p-2">
				<span class="min-w-24 text-sm font-medium">{stat}</span>
				<PlusPicker
					name={stat.toLowerCase()}
					bind:value={characters.active.stats[stat]}
					class="text-xl"
					full={characters.active.level > 1}
				/>
			</div>
		{/each}
	</div>

	<p class="text-muted-foreground mt-4 text-center text-xs">
		Total used: {totalBonuses} / 6
	</p>
{/if}
