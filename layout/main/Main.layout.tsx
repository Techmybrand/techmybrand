import React, { ReactNode, ReactElement, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext } from "@/contexts/AppContext";
import Mobmenu from "@/components/Mobmenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Totop from "@/components/Totop";

interface Props {
	children: ReactNode;
	page?: string;
	title?: string;
	description?: string;
}

const Main = ({ children, page, title, description }: Props): ReactElement => {
	const router = useRouter();
	return (
		<div>
			<Navbar />
			<Mobmenu />
			<Totop />
			{children}
			<Footer />
		</div>
	);
};

export default Main;
