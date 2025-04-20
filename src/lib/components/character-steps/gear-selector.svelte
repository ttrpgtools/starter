<script lang="ts">
	import { characters } from '$lib/character-manager.svelte';
	import { Button } from '$lib/components/ui/button';
	import { classes } from '$lib/models/classes';
	import { id } from '$lib/random';

	let selected = $state('');

	let selectedClass = $derived(classes.find((c) => c.name === characters.active?.class));
	let electiveOptions = $derived(
		selectedClass?.gear.elective.map((x) => ({ id: id(), name: x, type: 'class' as const })) || []
	);
	let classGear = $derived(
		selectedClass?.gear.default.map((x) => ({ id: id(), name: x, type: 'class' as const })) || []
	);

	function chooseElective(item: (typeof electiveOptions)[number]) {
		selected = item.name;
		if (characters.active) {
			characters.active.gear = [...classGear, item];
		}
	}
</script>

<div class="space-y-4">
	<p class="text-muted-foreground text-sm">
		Your class gives you 3 default items. Choose 1 additional piece of elective gear.
	</p>

	<ul class="list-inside list-disc text-sm">
		{#each classGear as item}
			<li>{item.name}</li>
		{/each}
	</ul>

	<p class="mt-4 text-sm">Elective Options:</p>
	<div class="flex flex-wrap gap-2">
		{#each electiveOptions as option (option.id)}
			<Button
				variant={selected === option.name ? 'default' : 'outline'}
				onclick={() => chooseElective(option)}
			>
				{option.name}
			</Button>
		{/each}
	</div>
</div>
