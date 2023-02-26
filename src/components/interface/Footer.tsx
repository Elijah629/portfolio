import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";

export const Footer: React.FunctionComponent = () => (
	<footer className="flex-center theme-border border-0 border-t-2 bg-secondary-light p-4 dark:bg-secondary-dark">
		<span>
			<Link
				target="_blank"
				className="theme-border border-0 border-b-2"
				href="https://gitcoin.co/tip?username=elijah629">
				<span className="hidden sm:inline">
					0x92AF1aEEd7D8Da4051D2F80ACb11124e5495F2E3
				</span>
				<span
					className="inline sm:hidden"
					aria-label="0x92AF1aEEd7D8Da4051D2F80ACb11124e5495F2E3">
					0x92AF..F2E3
				</span>
			</Link>{" "}
			<BiHeart
				className="inline fill-red-600"
				size={20}
			/>
		</span>
	</footer>
);
