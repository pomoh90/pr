"use client";

import React, { useState } from 'react'; // Импортируем useState для меню
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false); // Состояние для мобильного меню

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
        <title>STARZDUST - Our Services</title>
        <meta name="description" content="Explore STARZDUST's cutting-edge PR, marketing, and creative services for stellar brands." />
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
                <li><Link href="/portfolio" className={styles.navLink}>Portfolio</Link></li>
                {/* <li><Link href="/blog" className={styles.navLink}>Blog</Link></li> */}
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Hero/Services Section */}
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
                Our Services: Elevate Your Brand to Stellar Heights
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle} 
                variants={childVariants}
              >
                STARZDUST offers world-class PR, marketing, and creative solutions to help your brand shine brighter than ever.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="/contact">
                  <motion.button 
                    className={styles.heroButton} 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffd700" }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/services-hero.jpg" 
                alt="STARZDUST Services" 
                width={700} 
                height={450} 
                className={styles.heroImage} 
              />
            </motion.div>
          </motion.section>

          {/* Our Core Services Section */}
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
              Our Core Services
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              We provide a comprehensive suite of services designed to transform your brand and drive unparalleled success in today’s competitive landscape.
            </motion.p>
            <div className={styles.serviceCards}>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Public Relations</h3>
                <p>Strategic media engagement and storytelling to position your brand as a leader, creating a star-like presence in the industry.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Digital Marketing</h3>
                <p>Data-driven campaigns that boost engagement, maximize reach, and drive measurable results for your target audience.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Brand Strategy</h3>
                <p>Develop a powerful, consistent brand identity that stands out, resonates with audiences, and shines brightly in the market.</p>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Crisis Management</h3>
                <p>Expert guidance to protect and strengthen your brand’s reputation during critical moments, ensuring trust and brilliance remain intact.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
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
                Why Choose STARZDUST?
              </motion.h2>
              <motion.p 
                className={styles.aboutText} 
                variants={childVariants}
              >
                At STARZDUST, we bring unparalleled expertise, creativity, and passion to every project. With a global team of 250+ professionals, we’ve delivered transformative results for brands across industries, achieving a 300% increase in media visibility for our clients over the past five years. Our client-centric approach, innovative strategies, and commitment to excellence make us the partner of choice for stellar brands.
              </motion.p>
            </div>
            <motion.div 
              className={styles.aboutImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/why-choose-us.jpg" 
                alt="Why Choose STARZDUST" 
                width={650} 
                height={450} 
                className={styles.aboutImage} 
              />
            </motion.div>
          </motion.section>

          {/* Case Studies Section */}
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
              Case Studies: Our Impact
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              See how our services have transformed brands and delivered measurable success. Explore our portfolio for real-world examples of our expertise.
            </motion.p>
            <div className={styles.clientLogos}>
              <motion.div variants={childVariants}>
                <Image src="/images/case-study1.jpg" alt="Case Study 1" width={150} height={150} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/case-study2.jpg" alt="Case Study 2" width={150} height={150} className={styles.clientLogo} />
              </motion.div>
              <motion.div variants={childVariants}>
                <Image src="/images/case-study3.jpg" alt="Case Study 3" width={150} height={150} className={styles.clientLogo} />
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