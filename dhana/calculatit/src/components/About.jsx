import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <InformationCircleIcon className="h-12 w-12 mx-auto mb-4 text-blue-900 dark:text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">
            About Calculatit.com
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted source for accurate calculations and tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="mb-6">
                At Calculatit.com, we believe that accurate calculations should be accessible to everyone. 
                Our mission is to provide free, reliable, and easy-to-use calculation tools for both personal 
                and professional use.
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                What We Offer
              </h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Free, accurate calculation tools</li>
                <li>User-friendly interface</li>
                <li>Privacy-focused (all calculations done locally)</li>
                <li>Regular updates and new features</li>
                <li>Educational resources and guides</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Us
              </h3>
              <p className="mb-6">
                Our tools are designed with accuracy and ease of use in mind. We understand that whether 
                you're planning your finances, checking your health metrics, or working on professional 
                calculations, you need reliable results quickly.
              </p>

              <div className="mt-8">
                <a
                  href="#tools"
                  className="btn btn-primary inline-block"
                >
                  Explore Our Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
