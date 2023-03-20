import { useGlobalContext } from "@/contexts/AppContext";
import { navs } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Mobmenu() {
	const { closeSidebar, isSidebarOpen, isSubmenuOpen, toggleSubmenu } =
		useGlobalContext();

	const container: any = React.useRef();
	const handleClickOutside = (e: any) => {
		if (container.current && !container.current.contains(e.target)) {
			closeSidebar();
		}
	};
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	});

	return (
		<div className={`mobile-menu-overlay ${isSidebarOpen && "active"}`}>
			<div className="mobile-menu-overlay__inner" ref={container}>
				<div className="mobile-menu-overlay__header">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-6 col-8">
								<div className="logo">
									<Link href="/">
										<Image src="/images/logo.png" alt="logo" fill />
									</Link>
								</div>
							</div>
							<div className="col-md-6 col-4">
								<div className="mobile-menu-content text-end">
									<span
										className="mobile-navigation-close-icon"
										onClick={closeSidebar}
									></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu-overlay__body">
					<nav className="offcanvas-navigation">
						<ul>
							{navs.map((nav: any) => {
								const { page, id, links } = nav;
								return (
									<li
										className={`has-children ${
											isSubmenuOpen && "active"
										}`}
										key={id}
									>
										<div>
											{/* <span className="menu-expand" onClick={toggleSubmenu}>
                      </span> */}
											<span>{page}</span>
										</div>
										<ul className="sub-menu">
											{links.map((link: any) => {
												const { label, url, id } = link;
												return (
													<li key={id}>
														{isSubmenuOpen && (
															<Link href={url}>
																<span>{label}</span>
															</Link>
														)}
													</li>
												);
											})}
										</ul>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Mobmenu;
