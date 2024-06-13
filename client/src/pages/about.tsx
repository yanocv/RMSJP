import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/about.module.scss";

const About: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Us - Roger&apos;s Moving Service JP</title>
				<meta name="description" content="Learn more about our moving company" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* About Us Section */}
			<section className="bg-white text-center mb-6">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold text-gray-900">About Us</h1>
					<p className="text-xl text-gray-700 mt-4">
						We have been providing top-notch moving services for over 10 years.
					</p>
					<p className="text-lg text-gray-700">
						Welcome to Roger&apos;s Moving Service JP! We&apos;re your friendly moving company based in Tokyo, ready to
						handle all your moving needs. <br />
						Whether you&apos;re moving house, office, or need help with disposal, transportation, or storage, we&apos;ve
						got you covered.
					</p>
				</div>
			</section>

			{/* Our Services Section */}
			<section className="bg-gray-800 text-white py-12">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-semibold text-center mb-8">Our Services</h2>
					<div className="flex flex-wrap -mx-4">
						{/* Service Item */}
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
							<h3 className="text-3xl font-semibold mb-2">Household, and Office Moving</h3>
							<p className="text-lg">
								Got to move your house or office? Need to shift IT gear within Tokyo? Our awesome team is here to make
								your move smooth and stress-free. We handle everything from packing up your stuff to getting it safely
								to your new place.
							</p>
						</div>
						{/* Service Item */}
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
							<h3 className="text-3xl font-semibold mb-2">Delivery Services</h3>
							<p className="text-lg">
								Bought something from someone or a store that doesn’t deliver? No worries! We’ve got you covered with
								our delivery services across Tokyo and nearby areas like Chiba, Saitama, Ibaraki, and Kanagawa.
								We&apos;ll make sure your items get to you safe and sound, right on time.
							</p>
						</div>
						{/* Service Item */}
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
							<h3 className="text-3xl font-semibold mb-2">Disposal and Garbage Removal</h3>
							<p className="text-lg">
								Moving to a smaller place or leaving Japan and need to get rid of stuff fast? We’re here to help! Our
								quick and efficient disposal services in Tokyo will take care of your unwanted items in no time.
								We&apos;re all about finding the right solutions for your immediate needs.
							</p>
						</div>
						{/* Service Item */}
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
							<h3 className="text-3xl font-semibold mb-2">Transportation and Storage</h3>
							<p className="text-lg">
								Need to move stuff from point A to point B? We&apos;ve got you covered with our reliable transportation
								services. And if you need a place to store your items, we offer secure and convenient storage solutions
								to fit your needs.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
					<ul className=" list-inside text-lg text-gray-700 mx-auto max-w-3xl">
						<li className="mb-2">
							<strong className="font-bold">Affordable:</strong> We cost less than traditional Japanese moving companies
							without cutting corners on quality.
						</li>
						<li className="mb-2">
							<strong className="font-bold">Multilingual:</strong> We speak English, Japanese, and Portuguese, making it
							easy for both foreigners and locals to communicate with us.
						</li>
						<li className="mb-2">
							<strong className="font-bold">Customer-Focused:</strong> Your satisfaction is our top priority. We tailor
							our services to meet your needs and ensure a smooth moving experience.
						</li>
					</ul>
				</div>
			</section>

			{/* Our Values Section */}
			<section className="bg-gray-800 text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-semibold mb-6">Our Values</h2>
					<p className="text-lg">
						At Roger&apos;s Moving Service JP, We&apos;re all about providing top-notch service with integrity,
						reliability, and a personal touch. We&apos;re committed to making sure you&apos;re happy with our work.
					</p>
				</div>
			</section>

			{/* Contact Us Section */}
			<section className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-semibold text-gray-900 mb-6">Contact Us</h2>
					<p className="text-lg text-gray-700 mb-4">
						We&apos;re here to help with all your moving needs. Reach out to us today to learn more about our services
						or to schedule your move.
					</p>
					<ul className="list-none text-lg text-gray-700">
						<li className="mb-2">
							<strong>Phone:</strong> 070-2174-1781 (call / WhatsApp)
						</li>
						<li className="mb-2">
							<strong>Email:</strong> info@rogersmovingservicejp.com
						</li>
						<li>
							<strong>Office Address:</strong> 123 Street, City, Tokyo, Japan
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default About;
