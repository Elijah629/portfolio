"use client";

import { nextMedia } from "../helper/nextMedia";
import { theme } from "./twTheme";

const darkMode = nextMedia("(prefers-color-scheme:dark)").matches;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const accentColor: string = (
	darkMode
		? theme.colors?.["accent-dark"].toString()
		: theme.colors?.["accent-light"].toString()
)!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const primaryColor: string = (
	darkMode
		? theme.colors?.["primary-dark"].toString()
		: theme.colors?.["primary-light"].toString()
)!;
