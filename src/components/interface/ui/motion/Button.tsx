"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export const Button: React.FunctionComponent<HTMLMotionProps<"button">> = (
	props: HTMLMotionProps<"button">
) => {
	return (
		<motion.button
			{...{
				...props,
				...{
					className: "theme-interactable " + (props.className ?? "")
				}
			}}
			data-interactable>
			{props.children}
		</motion.button>
	);
};
