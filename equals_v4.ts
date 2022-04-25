
import { areConfusableCharacters } from "./helpers_1.ts";

const segmenter = new Intl.Segmenter("de", { granularity: "grapheme" });

export function equals(a: string, b: string): boolean {
	let segmentsA = Array.from(segmenter.segment(a.normalize()));
	let segmentsB = Array.from(segmenter.segment(b.normalize()));
	if (segmentsA.length !== segmentsB.length) {
		return false;
	}
	for (let i = 0; i < segmentsA.length; i++) {
		let graphemeA = segmentsA[i].segment;
		let graphemeB = segmentsB[i].segment;
		if (graphemeA !== graphemeB) {
			if (!areConfusableCharacters(graphemeA, graphemeB)) {
				return false;
			}
		}
	}
	return true;
}

console.assert(equals("ü", "ü")); // OK
console.assert(equals("а", "a")); // OK
