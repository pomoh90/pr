"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <Head>
        <title>STARZDUST | SMM and Creative Marketing</title>
        <meta name="description" content="STARZDUST — Shaping the future of PR, marketing, and creative solutions for stellar brands." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph (for Facebook, LinkedIn, and other platforms) */}
        <meta property="og:title" content="STARZDUST | Elevate Your SMM and Marketing" />
        <meta property="og:description" content="Crafting stellar content and boosting your brand on social media with creative solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starzdustagency.com/" />
        <meta property="og:image" content="https://starzdustagency.com/images/logo.png" />
        
        {/* Twitter Cards (for Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STARZDUST | SMM for Stellar Brands" />
        <meta name="twitter:description" content="Unique SMM strategies and creative marketing to skyrocket your social media success." />
        <meta name="twitter:image" content="https://starzdustagency.com/images/logo.png" />
        
        {/* Подключение шрифтов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />      </Head>
      {/* Остальной код JSX остается без изменений */}
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
              
              <ul className={styles.navList}>
                <li><Link href="./about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link href="/services" className={styles.navLink} onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link href="/portfolio" className={styles.navLink} onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
                {/* <li><Link href="/blog" className={styles.navLink} onClick={() => setMenuOpen(false)}>Blog</Link></li> */}
                <li><Link href="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* Остальной контент */}
        <main className={styles.mainContent}>
          {/* Hero Section */}
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
                Shaping the Future of PR, Marketing, and Creative Solutions for Stellar Brands
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle} 
                variants={childVariants}
              >
                At STARZDUST, we empower brands through strategic communication, digital transformation, and innovative marketing solutions to make them shine like stars.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="/services">
                  <motion.button 
                    className={styles.heroButton} 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffd700" }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Discover Our Magic
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/hero-image.jpg" 
                alt="STARZDUST — PR & Marketing" 
                width={700} 
                height={450} 
                className={styles.heroImage} 
              />
            </motion.div>
          </motion.section>
          
          {/* About Section */}
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
                Who We Are
              </motion.h2>
              <motion.p 
                className={styles.aboutText} 
                variants={childVariants}
              >
                STARZDUST is a global leader in PR and marketing consulting, helping businesses navigate the digital era with cutting-edge strategies and creative execution. Our mission is to create stellar brands that inspire and leave a lasting impression on audiences. We unite the expertise of 250+ professionals across key global cities to ensure every endeavor shines brightly.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="/about">
                  <button className={styles.learnMoreButton}>Learn More</button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.aboutImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/about-image.jpg" 
                alt="About STARZDUST" 
                width={650} 
                height={450} 
                className={styles.aboutImage} 
              />
            </motion.div>
          </motion.section>
          
          {/* Services Section */}
          <motion.section 
            className={styles.servicesOverview} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.sectionTitle} 
              variants={childVariants}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              From strategic PR to cutting-edge digital marketing, we deliver impactful solutions that elevate your brand to new heights.
            </motion.p>
            <div className={styles.serviceCards}>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Public Relations</h3>
                <p>Positioning your brand for success through media engagement and compelling storytelling, creating a star-like aura.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Digital Marketing</h3>
                <p>Data-driven strategies that enhance engagement and maximize reach for your target audience.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Brand Strategy</h3>
                <p>Creating a strong, consistent brand identity that stands out in the market and shines brightly.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Crisis Management</h3>
                <p>Protecting and strengthening your brand’s reputation in critical moments, preserving its brilliance and trust.</p>
              </motion.div>
            </div>
          </motion.section>
          
          {/* Clients Section */}
          <motion.section 
            className={styles.clientsSection} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className={styles.sectionTitle}>Our Clients and Achievements</h2>
            <p className={styles.sectionDescription}>
              We’re proud to partner with leading brands in entertainment, technology, and fashion, helping them shine on the global stage. Over the past 5 years, we’ve increased our clients’ media visibility by 300% and launched over 150 successful campaigns.
            </p>
            <div className={styles.clientLogos}>
              <motion.div variants={childVariants}>
                <Image src="/images/client1.jpg" alt="Client 1" width={150} height={80} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/client2.jpg" alt="Client 2" width={150} height={80} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/client3.jpg" alt="Client 3" width={150} height={80} className={styles.clientLogo} />
              </motion.div>
            </div>
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