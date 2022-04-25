
export function equals(a: string, b: string): boolean {
	return a === b;
}

console.assert(equals("ü", "ü")); // Error
