export function map<I, O>(
	value: I,
	cases: [I, O][],
	defaultValue: O | null = null
): O | null {
	for (let i = 0; i < cases.length; i++) {
		if (value === cases[i][0]) {
			return cases[i][1];
		}
	}
	return defaultValue;
}
