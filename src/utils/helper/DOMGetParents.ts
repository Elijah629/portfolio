export const parents = (element: Element): Element[] => {
	const parents: Element[] = [];
	let current: Element | null = element;
	while (current) {
		parents.unshift(current);
		current = current.parentElement;
	}
	return parents;
};
