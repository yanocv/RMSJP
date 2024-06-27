import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 border-b-2 border-gray-600">
				<div className="container mx-auto flex justify-between items-center">
					<div className="text-white text-lg flex items-center">
						<Image src="/images/logo.webp" alt="Logo" width={40} height={40} />
						<Link href="/" className="ml-2 text-white font-bold">
							{" "}
							{/* Added font-bold here */}
							Roger&apos;s Moving Service JP
						</Link>
					</div>
					<div className="lg:hidden">
						<button onClick={toggleMenu} className={`text-white focus:outline-none ${styles.freshNess}`}>
							<FontAwesomeIcon icon={faBars} className="text-lg" />
						</button>
					</div>
					<div className="hidden lg:flex items-center space-x-4">
						<Link href="/" className="text-white text-lg font-bold">
							{" "}
							{/* Added font-bold here */}
							Home
						</Link>
						<Link href="/about" className="text-white text-lg font-bold">
							{" "}
							{/* Added font-bold here */}
							About
						</Link>
						<Link href="/inquiry" className="text-white text-lg font-bold">
							{" "}
							{/* Added font-bold here */}
							Inquiry
						</Link>
						<div className="flex items-center space-x-4">
							<a
								href="https://www.facebook.com/groups/773031206910383"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white w-5"
							>
								<FontAwesomeIcon icon={faFacebook} className="text-lg" />
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white w-5">
								<FontAwesomeIcon icon={faInstagram} className="text-lg" />
							</a>
						</div>
					</div>
				</div>
			</nav>
			<div
				className={`hs-overlay ${
					isOpen ? "block" : "hidden"
				} size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none`}
			>
				<div
					className={`hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-16 opacity-0 transition-all max-w-full max-h-full h-full ${
						isOpen ? `opacity-100 ${styles.fadeIn}` : `opacity-0 ${styles.fadeOut}`
					}`}
				>
					<div className="bg-white flex flex-col pointer-events-auto max-w-full max-h-full h-full">
						<div className="flex justify-center items-center h-full">
							<div className="flex flex-col items-center justify-center">
								<Link href="/" className="text-gray-800 my-4 text-lg font-bold">
									{" "}
									{/* Added font-bold here */}
									Home
								</Link>
								<Link href="/about" className="text-gray-800 my-4 text-lg font-bold">
									{" "}
									{/* Added font-bold here */}
									About
								</Link>
								<Link href="/inquiry" className="text-gray-800 my-4 text-lg font-bold">
									{" "}
									{/* Added font-bold here */}
									Inquiry
								</Link>
							</div>
						</div>
						<div className="flex items-center justify-center gap-x-2 py-3 px-4 mt-auto border-t dark:border-neutral-700">
							<a
								href="https://www.facebook.com/groups/773031206910383"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 w-5"
							>
								<FontAwesomeIcon icon={faFacebook} className="text-lg" />
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 w-5"
							>
								<FontAwesomeIcon icon={faInstagram} className="text-lg" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
