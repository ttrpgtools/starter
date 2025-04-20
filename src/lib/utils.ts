import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function bifurcate<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]] {
	const pass: T[] = [];
	const fail: T[] = [];

	for (const item of items) {
		(predicate(item) ? pass : fail).push(item);
	}

	return [pass, fail];
}
