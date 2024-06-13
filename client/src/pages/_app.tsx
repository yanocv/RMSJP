import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const { statusCode } = pageProps;

	if (statusCode === 404) {
		return (
			<>
				<Navbar />
				<div>
					<h1>404 - Page Not Found</h1>
					<p>The page you are looking for does not exist.</p>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
