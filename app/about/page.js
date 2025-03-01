"use client";

import React, { useState } from 'react'; // Импортируем useState
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false); // Добавляем состояние для меню

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
        <title>STARZDUST - About Us</title>
        <meta name="description" content="Learn more about STARZDUST, a global leader in PR, marketing, and creative solutions for stellar brands." />
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
                <li><Link href="/services" className={styles.navLink}>Services</Link></li>
                <li><Link href="/portfolio" className={styles.navLink}>Portfolio</Link></li>
                {/* <li><Link href="/blog" className={styles.navLink}>Blog</Link></li> */}
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Hero/About Section */}
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
                About STARZDUST: Our Story and Mission
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle} 
                variants={childVariants}
              >
                Discover the journey of STARZDUST, where passion for innovation drives our leadership in PR, marketing, and creative solutions for stellar brands.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="/contact">
                  <motion.button 
                    className={styles.heroButton} 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffd700" }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/about-hero.jpg" 
                alt="STARZDUST Team" 
                width={700} 
                height={450} 
                className={styles.heroImage} 
              />
            </motion.div>
          </motion.section>

          {/* Our History Section */}
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
                Our History
              </motion.h2>
              <motion.p 
                className={styles.aboutText} 
                variants={childVariants}
              >
                Founded in 2020, STARZDUST began as a small team of visionary PR and marketing experts with a dream to transform how brands shine in the digital age. Starting in Zurich, Switzerland, we quickly expanded to major global cities, including New York, London, and Tokyo, building a reputation for innovative strategies and creative excellence. Over the past five years, we’ve grown to a team of 250+ professionals, delivering unparalleled results for clients across entertainment, technology, and fashion industries.
              </motion.p>
            </div>
            <motion.div 
              className={styles.aboutImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/history-image.jpg" 
                alt="STARZDUST History" 
                width={650} 
                height={450} 
                className={styles.aboutImage} 
              />
            </motion.div>
          </motion.section>

          {/* Our Mission & Vision Section */}
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
              Our Mission & Vision
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              At STARZDUST, our mission is to empower brands to shine like stars through strategic communication, cutting-edge digital marketing, and creative solutions that captivate audiences worldwide. Our vision is to lead the future of PR and marketing, driving innovation and impact for every client we serve.
            </motion.p>
            <div className={styles.serviceCards}>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Mission</h3>
                <p>Deliver transformative PR and marketing strategies that elevate brands to iconic status, fostering meaningful connections with audiences.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Vision</h3>
                <p>Be the global leader in creative communication, shaping the future of branding with innovation and passion.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Our Team Section */}
          <motion.section 
            className={styles.clientsSection} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.sectionTitle} 
              variants={childVariants}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              Our team of 250+ experts combines decades of experience in PR, marketing, and creative strategy, bringing diverse perspectives to every project. From award-winning strategists to innovative designers, we’re united by our passion for making brands shine.
            </motion.p>
            <div className={styles.clientLogos}>
              <motion.div variants={childVariants}>
                <Image src="/images/team-member1.jpg" alt="Team Member 1" width={150} height={150} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/team-member2.jpg" alt="Team Member 2" width={150} height={150} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/team-member3.jpg" alt="Team Member 3" width={150} height={150} className={styles.clientLogo} />
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
              <div className={styles.socialLinks}>
                <Link href="https://twitter.com/starzdust" className={styles.socialLink}>Twitter</Link>
                <Link href="https://instagram.com/starzdust" className={styles.socialLink}>Instagram</Link>
                <Link href="https://linkedin.com/company/starzdust" className={styles.socialLink}>LinkedIn</Link>
              </div>
            </motion.div>
          </footer>
        </main>
      </div>
    </>
  );
}