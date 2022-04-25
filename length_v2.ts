
export function length(s: string): number {
	let l = 0;
	for (const _ of s) {
		l++;
	}
	return l;
}

console.assert(length("🦙") === 1); // OK
