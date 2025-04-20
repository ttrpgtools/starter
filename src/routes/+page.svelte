<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	let { data } = $props();
</script>

<svelte:head>
	<title>TTRPG Starter</title>
</svelte:head>
<section class="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
	<h1 class="font-serif text-4xl font-bold">TTRPG Starter</h1>
	<p class="text-muted-foreground max-w-md text-lg">Do something cool.</p>

	<div class="flex w-full max-w-xs flex-col gap-4">
		{#if data?.user}
			<Button href="/dashboard" class="w-full">View My Dashboard</Button>
		{:else}
			<Button href="/api/auth/login" class="w-full">Sign In</Button>
			<p class="text-muted-foreground text-sm italic">Registration coming soon.</p>
		{/if}

		<div class="text-muted-foreground relative text-center text-sm">
			<span class="bg-border absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 transform"
			></span>
			<span class="bg-background relative px-2">or</span>
		</div>

		<Button variant="outline" href="/dashboard" class="w-full">Continue Without Signing In</Button>
	</div>
</section>
