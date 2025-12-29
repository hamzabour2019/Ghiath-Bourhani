'use client';

import { useEffect } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectLinks from '../components/ProjectLinks';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Proof from '../components/Proof';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Animations
    const revealOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, revealOptions);

    document.querySelectorAll('.card, .project-card, .item, .testimonial, .contact-card').forEach((el, index) => {
      el.classList.add('fade-in-up');
      (el as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
      revealObserver.observe(el);
    });

    // Add different animations for headings
    document.querySelectorAll('h2, h3').forEach(el => {
      el.classList.add('fade-in-left');
      revealObserver.observe(el);
    });

    // Scale in for icons
    document.querySelectorAll('.service-icon').forEach(el => {
      el.classList.add('scale-in');
      revealObserver.observe(el);
    });

    // Navbar Hide on Scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (header) {
        if (scrollTop > lastScrollTop) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <ProjectLinks />
      <Proof />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
