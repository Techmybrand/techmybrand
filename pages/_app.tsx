import "@/styles/globals.css";
import "@/styles/plugins/plugins.min.css";
import "@/styles/vendor/vendor.min.css";
import "@/styles/style.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}
