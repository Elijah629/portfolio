interface NextMediaQueryList {
	matches: boolean;
	media: string;
}

export const nextMedia = (query: string): NextMediaQueryList => {
	const mediaQueryList: NextMediaQueryList = {
		matches: global?.window?.matchMedia(query).matches ?? false,
		media: query
	};

	return mediaQueryList;
};
