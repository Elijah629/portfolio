"use client";

import React from "react";

export const NumberField: React.FunctionComponent<
	React.InputHTMLAttributes<HTMLInputElement>
> = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			type="number"
			{...{
				...props,
				...{
					className: "theme-interactable " + (props.className ?? "")
				}
			}}
			data-interactable
		/>
	);
};
