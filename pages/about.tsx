import { Inter } from "next/font/google";
import { AboutPage } from "@/views";
import { MainLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
	return (
		<MainLayout>
			<AboutPage />
		</MainLayout>
	);
}
