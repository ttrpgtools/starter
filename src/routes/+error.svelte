<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
	<h1 class="font-serif text-3xl font-bold text-red-600">An ill-fated journey!</h1>

	<p class="max-w-lg text-xl">You tried to tread a path that fate has forsaken. The scrolls say:</p>

	<p
		class="rounded-md border border-red-600 bg-gray-800 p-4 text-lg text-gray-300 italic shadow-inner"
	>
		{page.error?.message}
	</p>

	<Button href="/">Return to the safety of the tavern</Button>
</div>
