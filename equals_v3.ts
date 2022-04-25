
export function equals(a: string, b: string): boolean {
	return a.normalize() === b.normalize();
}

console.assert(equals("ü", "ü")); // OK
console.assert(equals("а", "a")); // Error
