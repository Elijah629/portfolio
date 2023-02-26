import React from "react";

import Link from "next/link";
import { BackButton } from "@/components/BackButton";
const Home: React.FunctionComponent = () => {
	return (
		<Link
			href="/project/0"
			className="inline-block">
			<BackButton />
		</Link>
	);
};

export default Home;
