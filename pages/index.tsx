import { Inter } from "next/font/google";
import { HomePage } from "@/views";
import { MainLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<MainLayout>
			<HomePage />
		</MainLayout>
	);
}
