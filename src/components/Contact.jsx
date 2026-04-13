import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'souravnwu25@gmail.com',
      link: 'mailto:souravnwu25@gmail.com'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+880 1317585185',
      link: 'tel:+8801317585185'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sourav233', color: '#333' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/sourav', color: '#0077B5' },
    { icon: FaTwitter, url: 'https://twitter.com/sourav', color: '#1DA1F2' },
    { icon: FaFacebook, url: 'https://facebook.com/sourav', color: '#1877F2' }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-card">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white group-hover:shadow-lg transition-shadow">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.title}</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="p-3 bg-gray-100 dark:bg-dark-card rounded-lg hover:shadow-lg transition-all"
                        style={{ color: social.color }}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {[
                  'Fast and reliable delivery',
                  'Clean, maintainable code',
                  'Responsive communication',
                  'Attention to detail',
                  'Continuous support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
? 'border-red-500': 'border-gray-300 dark: border-gray-600' } bg-gray-50 dark: bg-dark-card text-gray-800 dark: text-white focus: outline-none focus: ring-2 focus: ring-primary transition-all`} placeholder="sourav biswas" /> {errors.name && ( <p className="mt-1 text-sm text-red-500">{errors.name}</p> )} </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
? 'border-red-500': 'border-gray-300 dark: border-gray-600' } bg-gray-50 dark: bg-dark-card text-gray-800 dark: text-white focus: outline-none focus: ring-2 focus: ring-primary transition-all`} placeholder="souravnwu25@gmail.com" /> {errors.email && ( <p className="mt-1 text-sm text-red-500">{errors.email}</p> )} </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
? 'border-red-500': 'border-gray-300 dark: border-gray-600' } bg-gray-50 dark: bg-dark-card text-gray-800 dark: text-white focus: outline-none focus: ring-2 focus: ring-primary transition-all`} placeholder="Project Inquiry" /> {errors.subject && ( <p className="mt-1 text-sm text-red-500">{errors.subject}</p> )} </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
? 'border-red-500': 'border-gray-300 dark: border-gray-600' } bg-gray-50 dark: bg-dark-card text-gray-800 dark: text-white focus: outline-none focus: ring-2 focus: ring-primary transition-all resize-none`} placeholder="Tell me about your project..." ></textarea> {errors.message && ( <p className="mt-1 text-sm text-red-500">{errors.message}</p> )} </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;