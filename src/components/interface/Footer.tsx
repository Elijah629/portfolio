import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";

export const Footer: React.FunctionComponent = () => (
	<footer className="flex-center theme-border border-0 border-t-2 bg-secondary-light p-4 dark:bg-secondary-dark">
		<span>
			<Link
				target="_blank"
				className="theme-border border-0 border-b-2"
				href="https://gitcoin.co/elijah629">
				Donate
			</Link>{" "}
			<BiHeart
				className="inline fill-red-600"
				size={20}
			/>
		</span>
	</footer>
);
