import React from "react";
import face from "../assets/face.png";
import googlePlay from "../assets/googlePlay.svg";
import appStore from "../assets/appStore.svg";

const Footer = () => {
  return (
    <footer className="w-full px-3 bg-[#0B0B0F] border-t-amber-50/10 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12">

          {/* Brand */}
          <div>
           <div className="flex items-center gap-3 mb-6">
  <img
    src={face}
    alt="FresherAI"
    className="w-12 h-12 object-cover rounded-full"
  />

  <span className="text-2xl font-bold text-white">
    FresherAI
  </span>
</div>
           
            <p className="max-w-md text-sm leading-6 text-gray-400">
              FresherAI is an AI-powered career platform helping freshers
              build skills, prepare for interviews, improve resumes, and
              discover better career opportunities.
            </p>

            {/* App buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />

              <img
                src={appStore}
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="/" className="hover:text-[#F5B841] transition">
                Home
              </a>

              <a href="/about" className="hover:text-[#F5B841] transition">
                About us
              </a>

              <a href="/contact" className="hover:text-[#F5B841] transition">
                Contact us
              </a>

              <a href="/privacy" className="hover:text-[#F5B841] transition">
                Privacy policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Get in touch
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="tel:+1234567890"
                className="hover:text-[#F5B841] transition"
              >
                +1-234-567-890
              </a>

              <a
                href="mailto:sambit@example.com"
                className="hover:text-[#F5B841] transition"
              >
                sambit@example.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FresherAI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;