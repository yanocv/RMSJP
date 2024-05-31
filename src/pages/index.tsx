import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={`mt-2 ${styles.index}`}>
      <Head>
        <title>Roger&apos;s Moving Service JP</title>
        <meta name="description" content="Professional Moving Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`text-center text-gray-800 px-4`}>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Welcome to Roger&apos;s Moving Service JP
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          Whether you are planning to move across town or to a neighboring
          region, our dedicated team is here to make your transition smooth and
          hassle-free.
          <br />A new location brings new opportunities, and we understand the
          excitement and challenges that come with it.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row items-center mt-8">
        <div className="bg-gray-800 flex flex-col sm:flex-row items-center text-white w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="sm:w-1/2 text-left p-4">
            <p className="text-lg sm:text-xl mt-4">
              Are you ready to start a new chapter in a different location?
              <br />
              A change of scenery can open up fresh opportunities and new
              experiences.
              <br />
              If you’re planning a move and want a seamless transition, our team
              is here to help make it stress-free.
              <br />
              With a commitment to personalized service and meticulous attention
              to detail, we ensure that your belongings are transported safely
              to your new home.
              <br />
              Let us handle the complexities of moving, so you can enjoy the
              excitement of your new beginning.
            </p>
          </div>
          <div className="sm:w-1/2">
            <Image
              src="/images/2.jpg"
              alt="Moving Service"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-8">
              <Image
                src="/images/1.jpg"
                alt="Moving Truck"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="sm:w-1/2 text-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Moving with Ease
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                No job is too small or too big for us. Roger&apos;s Moving
                Company is your trusted partner for all your moving needs in
                Tokyo and surrounding areas. Whether you&apos;re moving within
                Tokyo or to a neighboring region, our experienced team is here
                to make your move smooth and hassle-free.
              </p>
              <p className="text-lg text-gray-800 mb-8">
                We offer a range of services including packing, unpacking, and
                quick moving services. Our goal is to be the English-speaking
                moving company of choice for residents in Tokyo.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 flex items-center text-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-8 order-2 sm:order-1">
              <h2 className="text-3xl font-semibold mb-4">Storage Solutions</h2>
              <p className="text-lg mb-8">
                Store your belongings at our warehouse for as long as you need.
                Whether you&apos;re downsizing, in need of extra space, or
                temporarily leaving the country, our storage services are here
                to help.
              </p>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2">
              <Image
                src="/images/storage.jpg"
                alt="Storage"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-8 order-2 sm:order-1">
              <Image
                src="/images/disposal.jpg"
                alt="Disposal"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Disposal
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dispose of unwanted items with ease. Our team will handle the
                disposal process efficiently and responsibly, giving you peace
                of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Testimonials of Satisfied Customers
            </h2>
            {/* Add your testimonials here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
