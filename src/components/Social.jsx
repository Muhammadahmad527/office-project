import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Social() {
  return (
    <section className="bg-white py-12 px-6 md:px-20 border-y border-dashed border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-gray-800">
        
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-red-600 transition"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white">
            <FaFacebook className="text-lg" />
          </span>
          Find us on Facebook
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-red-600 transition"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white">
            <FaXTwitter className="text-lg" />
          </span>
          Follow us on X
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-red-600 transition"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white">
            <FaInstagram className="text-lg" />
          </span>
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
