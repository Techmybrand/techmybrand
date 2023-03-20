import React, { useState, useEffect, useContext, createContext, useRef } from "react";

interface Active {
	slippageActive: number;
	gasActive: number;
}
// export interface Props {
// 	collapseMobHeader?: boolean;
// 	setCollapseMobHeader?: (collapseMobheader: boolean) => void;
// 	expandSidebar: boolean;
// 	setExpandSidebar: (expandSidebar: boolean) => void;
// }

const AppContext = createContext<any>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(true);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const toggleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	const container = useRef(0);

	return (
		<AppContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				isSidebarOpen,
				toggleSubmenu,
				isSubmenuOpen,
				setIsSidebarOpen,
				container,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
