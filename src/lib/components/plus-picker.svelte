<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ClassValue } from 'clsx';
	type Props = {
		name: string;
		value?: number;
		onchange?: (value: number) => void;
		disabled?: boolean;
		full?: boolean;
		min?: number;
		class?: ClassValue;
	};
	let { value = $bindable(), onchange, name, disabled, full, min, class: cls }: Props = $props();
	$effect(() => {
		if (value === undefined) {
			value = 0;
		}
	});
	const prefix = $props.id();
</script>

<div class={cn('relative w-max text-2xl', cls)}>
	<input
		class="plus skip"
		checked
		type="radio"
		bind:group={value}
		value={0}
		id={prefix + '-skip-plus'}
		{name}
		{disabled}
		autocomplete="off"
	/>
	<label class="plus-label hidden!" for={prefix + '-skip-plus'}></label>
	<input
		class="plus"
		type="radio"
		id={prefix + '-st-1'}
		bind:group={value}
		value={1}
		{name}
		{disabled}
		autocomplete="off"
	/>
	<label class="plus-label" for={prefix + '-st-1'}>
		<div class="plus-shape"></div>
	</label>
	<input
		class="plus"
		type="radio"
		id={prefix + '-st-2'}
		bind:group={value}
		value={2}
		{name}
		{disabled}
		autocomplete="off"
	/>
	<label class="plus-label" for={prefix + '-st-2'}>
		<div class="plus-shape"></div>
	</label>
	<input
		class="plus"
		type="radio"
		id={prefix + '-st-3'}
		bind:group={value}
		value={3}
		{name}
		{disabled}
		autocomplete="off"
	/>
	<label class="plus-label" for={prefix + '-st-3'}>
		<div class="plus-shape"></div>
	</label>
	{#if full}
		<input
			class="plus"
			type="radio"
			id={prefix + '-st-4'}
			bind:group={value}
			value={4}
			{name}
			{disabled}
			autocomplete="off"
		/>
		<label class="plus-label" for={prefix + '-st-4'}>
			<div class="plus-shape"></div>
		</label>
		<input
			class="plus"
			type="radio"
			id={prefix + '-st-5'}
			bind:group={value}
			value={5}
			{name}
			{disabled}
			autocomplete="off"
		/>
		<label class="plus-label" for={prefix + '-st-5'}>
			<div class="plus-shape"></div>
		</label>
	{/if}
	<label class="skip-button" for={prefix + '-skip-plus'}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-[0.75em]"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>
	</label>
</div>

<style>
	.plus-label {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 1em;
		height: 1em;
		border-radius: 0.25em;
		cursor: pointer;
	}

	.plus-shape {
		background-color: black;
		width: 80%;
		height: 80%;
		/*plus shaped cutout, works  best if it is applied to a square*/
		/* from Clippy @ https://bennettfeely.com/clippy/ */
		clip-path: polygon(
			55% 0,
			45% 0,
			45% 45%,
			0 45%,
			0 55%,
			45% 55%,
			45% 100%,
			55% 100%,
			55% 55%,
			100% 55%,
			100% 45%,
			55% 45%
		);
	}

	/* make pluss *after* the checked radio gray*/
	.plus:checked + .plus-label ~ .plus-label .plus-shape {
		background-color: lightgray;
	}
	.plus-label:hover > .plus-shape {
		background-color: gray !important;
	}

	/*hide away the actual radio inputs*/
	.plus {
		position: fixed;
		opacity: 0;
		left: -90000px;
	}

	.plus:focus + .plus-label {
		outline: 1px dotted black;
	}
	.skip-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1em;
		height: 1em;
		border-radius: 999em;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		right: -2em;
		text-align: center;
		line-height: 1em;
		font-size: 1em;
		background-color: rgba(0, 0, 0, 0.1);
	}
	.skip-button:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	.skip:checked ~ .skip-button {
		display: none;
	}
</style>
