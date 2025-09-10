import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Social() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-gray-800">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-pink-600 transition"
        >
          <FaInstagram className="text-2xl text-pink-600" />
          Follow us on Instagram
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition"
        >
          <FaFacebook className="text-2xl text-blue-600" />
          Find us on Facebook
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-black transition"
        >
          <FaXTwitter className="text-2xl text-black" />
          Find us on X
        </a>
      </div>
    </section>
  );
}
