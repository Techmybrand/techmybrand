import { useGlobalContext } from "@/contexts/AppContext";
import { navs } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import lightLogo from "../assets/images/light-logo.png";
import logo from "../assets/images/logo.png";

function Navbar() {
	const { openSidebar, isSidebarOpen }: any = useGlobalContext();
	const [small, setSmall] = React.useState(false);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => setSmall(window.pageYOffset > 200));
		}
	}, []);

	const pathname = typeof window !== "undefined" ? window.location.pathname : "";

	return (
		<header className="header-area header-area--absolute">
			<div
				className={`header-bottom-wrap header-sticky ${
					small || pathname !== "/" ? "is-sticky" : ""
				}`}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header position-relative">
								<div className="header__logo">
									<Link href="/">
										<div className="img-fluid light-logo">
											<Image
												src="/images/light-logo.png"
												alt="logo"
												fill
											/>
										</div>
										<div className="img-fluid dark-logo">
											<Image
												src="/images/logo.png"
												alt="logo"
												fill
											/>
										</div>
									</Link>
								</div>
								<div className="header-right">
									<div className="header__navigation menu-style-four d-none d-xl-block">
										<nav className="navigation-menu">
											<ul>
												{navs.map((nav: any) => {
													const { page, id, links } = nav;
													return (
														<li
															className="has-children has-children--multilevel-submenu"
															key={id}
														>
															<div className="nav-link">
																<span>{page}</span>
															</div>
															<ul className="submenu">
																{links.map(
																	(link: any) => {
																		const {
																			label,
																			url,
																			id,
																		} = link;
																		return (
																			<li key={id}>
																				<Link
																					href={
																						url
																					}
																				>
																					<span>
																						{
																							label
																						}
																					</span>
																				</Link>
																			</li>
																		);
																	}
																)}
															</ul>
														</li>
													);
												})}
											</ul>
										</nav>
									</div>
									{!isSidebarOpen && (
										<div
											className="mobile-navigation-icon white-md-icon d-block d-xl-none"
											onClick={openSidebar}
										>
											<i></i>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
