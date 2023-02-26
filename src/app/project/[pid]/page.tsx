"use client";

import { Button } from "@/components/interface/ui/motion";
import { motion, Variants } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

export default function Page({ params }: { params: { pid: string } }) {
	const previousMotion: Variants = {
		whileHover: {
			x: -50,
			transition: {
				x: {
					duration: 0.4
				}
			}
		}
	};
	const nextMotion: Variants = {
		whileHover: {
			x: 50,
			transition: {
				x: {
					duration: 0.4
				}
			}
		}
	};
	return (
		<div className="flex h-full min-h-min flex-col">
			{/* Header */}
			<div className="flex-center h-5 p-4 text-xl">
				<h1>TITLE</h1>
			</div>
			{/* Slide */}
			<div
				role="img"
				aria-label="[Project Title]"
				title="Project image"
				className="flex-1 bg-[url('https://picsum.photos/1920/1080')] bg-center"></div>
			{/* Controls */}
			<div className="flex h-24">
				{/* Previous */}
				<Button
					whileHover="whileHover"
					className="flex-center flex-1 text-3xl">
					<motion.div
						className="flex items-center"
						variants={previousMotion}>
						<BiArrowBack
							className="mr-5"
							size={48}
						/>
						<span className="hidden sm:inline">PREVIOUS</span>
					</motion.div>
				</Button>
				{/* Next */}
				<Button
					whileHover="whileHover"
					className="flex-center flex-1 text-3xl">
					<motion.div
						className="flex items-center"
						variants={nextMotion}>
						<span className="hidden sm:inline">NEXT</span>
						<BiArrowBack
							className="ml-5 scale-[-1]"
							size={48}
						/>
					</motion.div>
				</Button>
			</div>
		</div>
	);
}
