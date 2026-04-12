/**
 * Hero.tsx — Taquitos Casa Blanca Monterrey
 * Fase 1: Hero Section
 *
 * El botón hamburguesa y el panel de navegación han sido movidos
 * a FloatingNav.tsx (fixed, siempre visible al hacer scroll).
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  bgImage?: string;
  logoCircular?: string;
  logoCerdito?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero: React.FC<HeroProps> = ({
  bgImage      = '/assets/TODO_BG_IMAGE.jpg',
  logoCircular = '/assets/TODO_LOGO_CIRC.png',
  logoCerdito  = '/assets/TODO_CERDITO.png',
}) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden isolate"
      aria-label="Hero — Taquitos Casa Blanca"
    >
      {/* ── 1. FONDO ── */}
      <div
        className="absolute inset-0 min-h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
        role="img"
        aria-label="Foto de fondo de tacos Casa Blanca"
      />

      {/* ── 2. OVERLAY oscuro para contraste ── */}
      <div className="absolute inset-0 min-h-full bg-black/40" />

      {/* ── 3. LOGO flotante (solo logo, hamburguesa en FloatingNav) ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 flex items-center px-5 py-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <a href="#hero" aria-label="Ir al inicio">
          <img
            src={logoCircular}
            alt="Logo Taquitos Casa Blanca"
            className="h-12 w-auto drop-shadow-lg transition-opacity duration-200 hover:opacity-90"
          />
        </a>
      </motion.div>

      {/* ── 4. CONTENIDO CENTRAL ── */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2 px-6 pt-20 pb-10 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* 4a. Cerdito vaquero */}
        <motion.div variants={fadeInUp}>
          <img
            src={logoCerdito}
            alt="Cerdito vaquero de Monterrey — mascota Casa Blanca"
            className="
              h-[38vh] max-h-[240px] w-auto object-contain drop-shadow-2xl
              sm:h-[42vh] sm:max-h-[280px]
              md:h-[40vh] md:max-h-[300px]
              [@media(max-aspect-ratio:4/3)]:h-[28vh]
              [@media(max-aspect-ratio:4/3)]:max-h-[200px]
            "
          />
        </motion.div>

        {/* 4b. Título */}
        <motion.h1
          variants={fadeInUp}
          style={{ textShadow: '0 3px 0 rgba(0,0,0,0.6), 0 6px 20px rgba(0,0,0,0.4)' }}
          className="
            text-display text-5xl uppercase leading-[1.0] tracking-tight text-white
            sm:text-6xl md:text-7xl md:leading-[1.1] lg:text-8xl
          "
        >
          Los autenticos de Chiapas
          <br />
          en Monterrey
        </motion.h1>

        {/* 4c. Subtítulo */}
        <motion.p
          variants={fadeInUp}
          className="max-w-sm text-base font-medium leading-relaxed text-white/90 drop-shadow-md sm:max-w-md sm:text-lg"
        >
          Ahora en San Pedro Garza García.
        </motion.p>

        {/* 4d. Botón CTA */}
        <motion.div variants={fadeInUp} className="pt-2">
          <a
            href="#menu"
            id="cta-ver-menu"
            className="
              group inline-flex items-center gap-2 rounded-full bg-primary-orange
              px-10 py-4 text-base font-bold uppercase tracking-widest text-brand-black
              shadow-[0_4px_24px_rgba(243,146,0,0.50)] transition-all duration-200
              hover:scale-105 hover:shadow-[0_6px_32px_rgba(243,146,0,0.70)]
              active:scale-95 sm:px-12 sm:py-5 sm:text-lg
            "
          >
            Ver Menú
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;
