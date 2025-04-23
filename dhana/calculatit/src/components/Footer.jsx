import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Calculatit</h3>
            <p className="text-gray-400">
              Your trusted source for accurate calculations and tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tools" className="text-gray-400 hover:text-white">Tools</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#bmi-calculator" className="text-gray-400 hover:text-white">BMI Calculator</a>
              </li>
              <li>
                <a href="#mortgage-calculator" className="text-gray-400 hover:text-white">Mortgage Calculator</a>
              </li>
              <li>
                <a href="#compound-calculator" className="text-gray-400 hover:text-white">Compound Interest</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Calculatit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
