"use client";

import React, { useState } from 'react'; // Импортируем useState для меню
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function Portfolio() {
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
        <title>STARZDUST - Portfolio</title>
        <meta name="description" content="Explore STARZDUST's portfolio of transformative PR, marketing, and creative projects for stellar brands." />
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
                {/* <li><Link href="/blog" className={styles.navLink}>Blog</Link></li> */}
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Hero/Portfolio Section */}
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
                Our Portfolio: Stellar Projects That Shine
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle} 
                variants={childVariants}
              >
                Discover STARZDUST’s transformative PR, marketing, and creative projects that have elevated brands to new heights.
              </motion.p>
              <motion.div variants={childVariants}>
                <Link href="/contact">
                  <motion.button 
                    className={styles.heroButton} 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffd700" }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore More Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className={styles.heroImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/portfolio-hero.jpg" 
                alt="STARZDUST Portfolio" 
                width={700} 
                height={450} 
                className={styles.heroImage} 
              />
            </motion.div>
          </motion.section>

          {/* Featured Projects Section */}
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
              Featured Projects
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              Explore our most impactful campaigns and initiatives, showcasing our expertise in PR, marketing, and creative strategy.
            </motion.p>
            <div className={styles.serviceCards}>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Luxury Brand Launch</h3>
                <p>We launched a luxury fashion brand with a star-studded PR campaign, achieving a 200% increase in media coverage and brand awareness within six months.</p>
                <Image 
                  src="/images/project1.jpg" 
                  alt="Luxury Brand Launch" 
                  width={300} 
                  height={200} 
                  className={styles.projectImage} 
                />
                <Link href="/portfolio/luxury-brand-launch" className={styles.navLink}>
                  Learn More
                </Link>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Tech Startup Growth</h3>
                <p>Boosted a tech startup’s visibility with a digital marketing campaign, driving a 150% increase in user engagement and securing major partnerships.</p>
                <Image 
                  src="/images/project2.jpg" 
                  alt="Tech Startup Growth" 
                  width={300} 
                  height={200} 
                  className={styles.projectImage} 
                />
                <Link href="/portfolio/tech-startup-growth" className={styles.navLink}>
                  Learn More
                </Link>
              </motion.div>
              <motion.div 
                className={styles.serviceCard} 
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 215, 0, 0.2)" }}
                variants={childVariants}
              >
                <h3>Entertainment Campaign</h3>
                <p>Created a viral entertainment campaign for a major film studio, generating over 1 million social media impressions and nationwide buzz.</p>
                <Image 
                  src="/images/project3.jpg" 
                  alt="Entertainment Campaign" 
                  width={300} 
                  height={200} 
                  className={styles.projectImage} 
                />
                <Link href="/portfolio/entertainment-campaign" className={styles.navLink}>
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* Impact Section */}
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
                Our Impact
              </motion.h2>
              <motion.p 
                className={styles.aboutText} 
                variants={childVariants}
              >
                Over the past five years, STARZDUST has completed over 150 projects, increasing our clients’ media visibility by 300% and driving billions in brand value. Our portfolio showcases our ability to deliver innovative solutions that resonate with audiences and transform brands into global icons.
              </motion.p>
            </div>
            <motion.div 
              className={styles.aboutImageContainer}
              variants={childVariants}
            >
              <Image 
                src="/images/impact-image.jpg" 
                alt="STARZDUST Impact" 
                width={650} 
                height={450} 
                className={styles.aboutImage} 
              />
            </motion.div>
          </motion.section>

          {/* Client Logos Section */}
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
              Our Clients
            </motion.h2>
            <motion.p 
              className={styles.sectionDescription} 
              variants={childVariants}
            >
              We’ve partnered with leading brands in entertainment, technology, and fashion to create stellar campaigns that leave a lasting impression.
            </motion.p>
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