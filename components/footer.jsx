import { Github, Linkedin, Globe, Youtube } from "lucide-react"; // Added necessary icons
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        Made with ❤️ by Ayush Rai
      </div>

      <div className="flex gap-4 items-center">


        {/* GitHub */}
        <a
          href="https://github.com/ayush123-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* Portfolio */}
        <a
          href="https://ayushrai-jan-2004.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Globe className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ayush-rai-7109202b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
