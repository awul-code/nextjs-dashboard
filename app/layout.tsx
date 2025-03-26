import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
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
