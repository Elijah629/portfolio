import "./globals.css";
import { Cousine } from "@next/font/google";
import { Footer } from "@/components/interface/Footer";

const cousine = Cousine({
	subsets: ["latin"],
	weight: "700",
	display: "block"
});

export const metadata = {
	title: "Home",
	description: "Elijah629's Portfolio",
	icons: { icon: "/favicon.png" }
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="h-full">
			<body className={"theme h-full " + cousine.className}>
				<div className="flex h-full flex-col">
					{/* Doesnt work with next atm */}
					{/* <Cursor /> */}
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
