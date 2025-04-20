<script lang="ts">
	import { characters } from '$lib/character-manager.svelte';
	import { classes } from '$lib/models/classes';
	import type { Stat } from '$lib/models/character';
	import { id } from '$lib/random';
	import { Button } from '$lib/components/ui/button';

	const traitMap: Record<Stat, string> = {
		Vitality: 'Indulgent',
		Might: 'Forceful',
		Resilience: 'Tough',
		Spirit: 'Compassionate',
		Arcane: 'Ambitious',
		Will: 'Self-Controlled',
		Sensory: 'Alert',
		Reflex: 'Smooth',
		Vigor: 'Enthusiastic',
		Skill: 'Confident',
		Intelligence: 'Opinionated',
		Luck: 'Carefree',
	};

	let classTraits = $derived(
		getCoreStats(characters.active?.class ?? '').map((stat) => ({
			id: id(),
			stat,
			name: traitMap[stat],
		}))
	);
	let ctSet = $derived(new Set(classTraits.map((trait) => trait.stat)));

	let chosen: Stat | undefined = $state(
		characters.active?.traits.find((t) => !ctSet.has(t.stat))?.stat
	);

	function toggle(stat: Stat) {
		if (chosen === stat) {
			chosen = undefined;
			if (characters.active) {
				characters.active.traits = classTraits;
				characters.active.stats[stat] = 0;
			}
		} else {
			chosen = stat;
			if (characters.active) {
				characters.active.traits = [...classTraits, { id: id(), stat, name: traitMap[stat] }];
				characters.active.stats[stat] = 1;
			}
		}
	}

	function getCoreStats(className: string) {
		const classData = classes.find((c) => c.name === className);
		return classData ? classData.stats : [];
	}
</script>

<div class="space-y-4">
	<p class="text-muted-foreground text-sm">
		Your class gives you two associated traits. Choose one more to define your character’s
		personality.
	</p>

	<div class="flex flex-wrap gap-2">
		{#each Object.entries(traitMap) as [stat, trait]}
			<Button
				size="sm"
				disabled={classTraits.some((t) => t.stat === stat)}
				variant={chosen === stat || !!classTraits.find((t) => t.stat === stat)
					? 'default'
					: 'outline'}
				class={['cursor-pointer']}
				onclick={() => toggle(stat as Stat)}
			>
				{trait}
			</Button>
		{/each}
	</div>
</div>
