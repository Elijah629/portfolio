"use client";

import React from "react";

export const Button: React.FunctionComponent<
	React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			{...{
				...props,
				...{
					className:
						"theme-interactable " +
						(props.className ?? "")
				}
			}}
			data-interactable>
			{props.children}
		</button>
	);
};
