
const confusableCharacters = await (async function() {
	let map = new Map<string, string>();
	let text = await Deno.readTextFile("./third_party/confusables.txt");
	for (let line of text.split("\n")) {
		if (line === "") {
			continue;
		}
		if (line.startsWith("#")) {
			continue;
		}
		let match = line.match(/(\w+)\s+;\s+(\w+)/);
		if (match === null) {
			continue;
		}
		let a = String.fromCodePoint(parseInt(match[1], 16));
		let b = String.fromCodePoint(parseInt(match[2], 16));
		map.set(a, b);
		map.set(b, a);
	}
	return map;
})();

export function areConfusableCharacters(a: string, b: string): boolean {
	if (confusableCharacters.get(a) === b) {
		return true;
	}
	if (confusableCharacters.get(b) === a) {
		return true;
	}
	return false;
}
