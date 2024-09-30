// components/Footer.jsx

import { Link } from "@nextui-org/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Optional
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">PetHarmony</h4>
            <p className="text-gray-400">
              Your trusted source for pet care tips, advice, and heartwarming
              stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-blue-500"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-pink-500"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PetHarmony. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
