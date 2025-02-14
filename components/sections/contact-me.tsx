import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa6";
import Link from "next/link";

export function ContactMe() {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p>
        Let&apos;s connect! Feel free to reach out if you have any questions,
        collaboration ideas, or just want to chat about tech.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <Link
          href="https://github.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <FaGithub size={32} />
        </Link>
        <Link
          href="https://x.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          title="X"
        >
          <FaXTwitter size={32} />
        </Link>
        <Link
          href="https://instagram.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram size={32} />
        </Link>
        <Link
          href="https://linkedin.com/in/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={32} />
        </Link>
        <Link
          href="https://facebook.com/angelstchavez"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebook size={32} />
        </Link>
      </div>
    </div>
  );
}
