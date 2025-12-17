import Header from "@/components/Header/Header";
import { InteractionProvider } from "@/components/Providers/InteractionProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<InteractionProvider>
						<Header />

						<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
					</InteractionProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
