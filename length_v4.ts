
const segmenter = new Intl.Segmenter("de", { granularity: "grapheme" });

export function length(s: string): number {
	let l = 0;
	for (const _ of segmenter.segment(s)) {
		l++;
	}
	return l;
}

console.assert(length("🦙") === 1); // OK
console.assert(length("ཧྐྵྨླྺྼྻྂ") === 1); // OK
