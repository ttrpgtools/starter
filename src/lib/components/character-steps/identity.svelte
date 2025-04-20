<script lang="ts">
	import { characters } from '$lib/character-manager.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<div class="grid gap-4">
	<div>
		<label class="mb-1 block text-sm font-medium" for="name">Name</label>
		<Input
			id="name"
			bind:value={
				() => characters.active?.name ?? '',
				(v) => {
					if (characters.active) characters.active.name = v;
				}
			}
		/>
	</div>

	<div class="flex gap-4">
		<div class="flex-1">
			<label class="mb-1 block text-sm font-medium" for="name"
				>Avatar (Upload functionality coming soon)</label
			>
			<Input
				id="avatarUrl"
				bind:value={
					() => characters.active?.avatarUrl ?? '',
					(v) => {
						if (characters.active) characters.active.avatarUrl = v;
					}
				}
			/>
		</div>
		<div>
			<label class="mb-1 block text-sm font-medium" for="name">Level</label>
			<Input
				type="number"
				id="level"
				bind:value={
					() => characters.active?.level ?? '',
					(v) => {
						if (characters.active) characters.active.level = v || 1;
					}
				}
			/>
		</div>
	</div>

	<div>
		<label class="mb-1 block text-sm font-medium" for="appearance">Appearance</label>
		<Textarea
			id="appearance"
			rows={3}
			bind:value={
				() => characters.active?.appearance ?? '',
				(v) => {
					if (characters.active) characters.active.appearance = v;
				}
			}
		/>
	</div>

	<div>
		<label class="mb-1 block text-sm font-medium" for="background">Background</label>
		<Textarea
			id="background"
			rows={4}
			bind:value={
				() => characters.active?.background ?? '',
				(v) => {
					if (characters.active) characters.active.background = v;
				}
			}
		/>
	</div>
</div>
