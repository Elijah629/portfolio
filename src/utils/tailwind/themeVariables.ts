"use client";

import { nextMedia } from "../helper/nextMedia";
import { theme } from "./twTheme";

const darkMode = nextMedia("(prefers-color-scheme:dark)").matches;
export const accentColor: string = darkMode
	? theme.colors["accent-dark"]
	: theme.colors["accent-light"];
export const primaryColor: string = darkMode
	? theme.colors["primary-dark"]
	: theme.colors["primary-light"];
