import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Inquiry: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, email, message });
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Inquiry - Moving Company</title>
        <meta
          name="description"
          content="Contact us for your moving inquiries"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Inquiry</h1>
        <p className="text-lg mt-4">
          Contact us for more information or to get a quote.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
