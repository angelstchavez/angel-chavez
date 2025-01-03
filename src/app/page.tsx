import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-neutral-800">
      <h1 className="text-4xl font-bold mb-2">Angel Chavez</h1>
      <h2 className="text-xl mb-6 text-neutral-600">Software Developer</h2>
      <div className="flex space-x-4">
        <Link
          href="https://github.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-800"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-800"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://twitter.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-800"
        >
          <FaTwitter size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
