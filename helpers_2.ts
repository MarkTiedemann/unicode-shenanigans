
const invisibleCharacters = await (async function() {
	let set = new Set<string>();
	let text = await Deno.readTextFile("./third_party/invisible-characters.json");
	for (let { codePoint, width } of JSON.parse(text)) {
		if (width === 0) {
			set.add(String.fromCodePoint(codePoint));
		}
	}
	return set;
})();

export function removeInvisibleCharacters(s: string): string {
	let r = "";
	for (let c of s) {
		if (!invisibleCharacters.has(c)) {
			r += c;
		}
	}
	return r;
}
