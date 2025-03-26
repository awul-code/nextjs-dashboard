import "@/app/ui/global.css";
import { inter } from "./ui/font";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="js-focus-visible" data-js-focus-visible="">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
