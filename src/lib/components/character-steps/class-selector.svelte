<script lang="ts">
	import { characters } from '$lib/character-manager.svelte';
	import { Button } from '$lib/components/ui/button';
	import { classes, type EnclaveClass } from '$lib/models/classes';
	import { id } from '$lib/random';

	function chooseClass(cls: EnclaveClass) {
		if (characters.active) {
			characters.active.class = cls.name;
			characters.active.abilities = cls.abilities.map((a) => ({ id: id(), name: a }));
			characters.active.stats = { [cls.stats[0]]: 2, [cls.stats[1]]: 1 };
		}
	}
</script>

<div class="grid gap-6">
	{#each classes as cls}
		<div
			class={[
				'rounded-lg border p-4 shadow-sm transition hover:shadow-md',
				characters.active?.class === cls.name && 'border-emerald-500',
			]}
		>
			<div class="flex items-center justify-between">
				<div>
					<h3 class="text-lg font-bold">{cls.name}</h3>
					<p class="text-muted-foreground text-sm">Core Stats: {cls.stats.join(', ')}</p>
				</div>
				<Button onclick={() => chooseClass(cls)}>Choose</Button>
			</div>

			<div class="mt-2">
				<p class="text-sm font-semibold">Abilities:</p>
				<ul class="list-inside list-disc text-sm">
					{#each cls.abilities as ab}
						<li>{ab}</li>
					{/each}
				</ul>
			</div>

			<div class="mt-2">
				<p class="text-sm font-semibold">Default Gear:</p>
				<ul class="list-inside list-disc text-sm">
					{#each cls.gear.default as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

			<div class="mt-2">
				<p class="text-sm font-semibold">Elective Gear Options:</p>
				<ul class="list-inside list-disc text-sm">
					{#each cls.gear.elective as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>
