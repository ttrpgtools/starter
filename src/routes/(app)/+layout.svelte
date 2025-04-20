<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { Button } from '$lib/components/ui/button';
	let { data, children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="flex items-center justify-between border-b p-4">
		<h1 class="text-xl font-semibold">TTRPG Starter</h1>
		<nav class="flex items-center gap-2">
			<Button href="/characters" size="sm" variant="default"
				><Icon icon="users" class="mr-1.5 size-4" /> Thing 1</Button
			>
			<Button href="/characters/new" size="sm" variant="default"
				><Icon icon="plus" class="mr-1.5 size-4" /> Thing 2</Button
			>
			{#if data?.user}
				<Button href="/api/auth/logout" size="sm" variant="outline"
					><Icon icon="logout" class="mr-1.5 size-4" /> Logout</Button
				>
			{/if}
		</nav>
	</header>

	<main class="flex-1 p-4">
		{@render children()}
	</main>
</div>
