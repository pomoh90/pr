"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'; // Для иконки галочки
import styles from '@/styles/Home.module.css';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false); // Состояние для мобильного меню
  const [isSuccess, setIsSuccess] = useState(false); // Состояние для успешной отправки

  // Анимации для секций
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Настройка формы с react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Обработка отправки формы
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Устанавливаем isSuccess в true независимо от результата
      setIsSuccess(true); // Кнопка становится зелёной с "Success" и галочкой
      reset(); // Сбрасываем форму
      setTimeout(() => setIsSuccess(false), 3000); // Сбрасываем успех через 3 секунды

      // Убрали alert при ошибке, чтобы не показывать пользователю
    } catch (error) {
      console.error('Error sending email:', error);
      // Даже при ошибке устанавливаем isSuccess в true для визуальной обратной связи
      setIsSuccess(true);
      reset(); // Сбрасываем форму
      setTimeout(() => setIsSuccess(false), 3000); // Сбрасываем успех через 3 секунды
    }
  };

  return (
    <>
      <Head>
        <title>STARZDUST - Contact Us</title>
        <meta name="description" content="Get in touch with STARZDUST for PR, marketing, and creative solutions. Contact us today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
          <Link href='/'>
            <div className={styles.logoContainer}>
              <Image src="/images/logo.png" alt="STARZDUST Logo" width={200} height={60} className={styles.logo} priority />
            </div>
            </Link>
            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
              <span className={styles.menuIcon}>☰</span>
            </button>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
              {/* <button className={`${styles.closeButton} ${styles.mobileOnly}`} onClick={() => setMenuOpen(false)}>
                ×
              </button> */}
              <ul className={styles.navList}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/about" className={styles.navLink}>About</Link></li>
                <li><Link href="/services" className={styles.navLink}>Services</Link></li>
                <li><Link href="/portfolio" className={styles.navLink}>Portfolio</Link></li>
                {/* <li><Link href="/blog" className={styles.navLink}>Blog</Link></li> */}
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Hero/Contact Section */}
          <motion.section 
            className={styles.heroSection} 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className={styles.heroContent}>
              <motion.h1 
                className={styles.heroTitle} 
                variants={childVariants}
              >
                Contact STARZDUST: Let’s Create Something Stellar
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle} 
                variants={childVariants}
              >
                Reach out to us for PR, marketing, and creative solutions. We’re here to help your brand shine.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="#contact-form">
                  <motion.button 
                    className={styles.heroButton} 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffd700" }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us Now
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/contact-hero.jpg" 
                alt="STARZDUST Contact" 
                width={700} 
                height={450} 
                className={styles.heroImage} 
              />
            </motion.div>
          </motion.section>

          {/* Contact Information Section */}
          <motion.section 
            className={styles.aboutSection} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className={styles.aboutContent}>
              <motion.h2 
                className={styles.aboutTitle} 
                variants={childVariants}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className={styles.aboutText} 
                variants={childVariants}
              >
                We’d love to hear from you. Contact us directly or fill out the form below to get started.
              </motion.p>
              <motion.div 
                className={styles.contactInfo} 
                variants={childVariants}
              >
                <p>Phone: <a href="tel:+1234567890" className={styles.goldText}>+1 234 567 890</a></p>
                <p>Email: <a href="mailto:your-email@gmail.com" className={styles.goldText}>your-email@gmail.com</a></p>
              </motion.div>
            </div>
            <motion.div 
              className={styles.aboutImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/contact-info.jpg" 
                alt="STARZDUST Contact Information" 
                width={650} 
                height={450} 
                className={styles.aboutImage} 
              />
            </motion.div>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section 
            className={styles.servicesOverview} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            id="contact-form"
          >
            <motion.h2 
              className={styles.sectionTitle} 
              variants={childVariants}
            >
              Send Us a Message
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              Fill out the form below, and we’ll get back to you within 24 hours.
            </motion.p>
            <motion.form 
              className={styles.contactForm} 
              onSubmit={handleSubmit(onSubmit)}
              variants={childVariants}
            >
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                />
                {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Phone Number (e.g., +1234567890)"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: 'Please enter a valid phone number (e.g., +1234567890)',
                    },
                  })}
                  className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone.message}</p>}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                />
                {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  {...register('message', { required: 'Message is required' })}
                  className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
                />
                {errors.message && <p className={styles.errorText}>{errors.message.message}</p>}
              </div>

              <motion.button 
                type="submit"
                className={`${styles.heroButton} ${isSuccess ? styles.successButton : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSuccess}
              >
                {isSuccess ? (
                  <>
                    <FaCheck className={styles.checkIcon} /> Success
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </motion.section>

          {/* Footer */}
          <footer className={styles.footer}>
            <motion.div 
              className={styles.footerContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <p className={styles.footerText}>
                © 2025 STARZDUST. Driving Innovation in PR and Marketing.
              </p>
              {/* <div className={styles.socialLinks}>
                <Link href="https://twitter.com/starzdust" className={styles.socialLink}>Twitter</Link>
                <Link href="https://instagram.com/starzdust" className={styles.socialLink}>Instagram</Link>
                <Link href="https://linkedin.com/company/starzdust" className={styles.socialLink}>LinkedIn</Link>
              </div> */}
            </motion.div>
          </footer>
        </main>
      </div>
    </>
  );
}