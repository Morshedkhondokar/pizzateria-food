import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-red-200 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
          {/* Regarding */}
          <div>
            <h3 className="font-bold mb-3">Regarding</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Attributes</li>
              <li>Updates</li>
              <li>Selection</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div>
            <h3 className="font-bold mb-3">Enterprise</h3>
            <ul className="space-y-2">
              <li>Why Pizzateria?</li>
              <li>Partner With Us</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Assistance */}
          <div>
            <h3 className="font-bold mb-3">Assistance</h3>
            <ul className="space-y-2">
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact Us</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-bold mb-3">Get in Touch</h3>
            <p className="text-gray-600">
              Have a question or feedback? <br /> We’re eager to hear from you
            </p>
          </div>

          {/* Logo & Social */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="images/logo.png"
                alt="Logo"
                className="w-12 h-12"
              />
              <h3 className="font-bold text-lg">Pizzateria</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Our mission is to satisfy your hunger with tasty food, delivered
              quickly and at no charge
            </p>
            <div className="flex gap-4 text-red-500 text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* bottom copyright */}
        <div className="mt-8 border-t border-red-300 pt-5 text-center text-gray-500 text-sm">
          © 2025 Pizzateria. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
