"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "./interface/ui/motion";

export const BackButton: React.FunctionComponent = () => {
	const arrowMotion: Variants = {
		whileHover: {
			x: [0, -50, 50, 0],
			transition: {
				x: {
					duration: 0.4,
					times: [0, 0.5, 0.5, 1]
				}
			}
		}
	};
	return (
		<Button
			whileHover="whileHover"
			whileFocus="whileHover"
			className="flex-center aspect-square flex-col overflow-hidden p-3">
			<motion.div variants={arrowMotion}>
				<BiArrowBack size={48} />
			</motion.div>
			<span className="text-xl uppercase">back</span>
		</Button>
	);
};
