import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sourav', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/sourav', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/sourav', label: 'Twitter' },
    { icon: FaFacebook, url: 'https://facebook.com/sourav', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="gradient-text">Sourav</span> Biswas
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:souravnwu25@gmail.com" className="hover:text-primary transition-colors">
                  souravnwu25@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:01317585185" className="hover:text-primary transition-colors">
                  +01317585185
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Sourav Biswas. Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;