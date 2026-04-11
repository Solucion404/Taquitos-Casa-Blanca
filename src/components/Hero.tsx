/**
 * Hero.tsx — Taquitos Casa Blanca Monterrey
 * Fase 1: Hero Section
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │  GUÍA DE IMÁGENES — reemplaza las rutas marcadas con TODO   │
 * │  Todas las imágenes deben vivir en /public/assets/          │
 * │  Las rutas en código empiezan con  /assets/                 │
 * └─────────────────────────────────────────────────────────────┘
 *
 * TODO_BG_IMAGE   → Foto de fondo del hero (ej. foto_1.jpg)
 * TODO_LOGO_CIRC  → Logo circular de nav (ej. logo-circular.png)
 * TODO_CERDITO    → Logo del cerdito vaquero centrado
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

// ─── Tipos ────────────────────────────────────────────────────
interface HeroProps {
  /**
   * Ruta pública de la foto de fondo del hero.
   * Debe existir en /public/assets/.
   * Ejemplo: "/assets/foto_1.jpg"
   */
  bgImage?: string;

  /**
   * Ruta del logo circular que aparece en la navegación (izquierda).
   * Ejemplo: "/assets/logo-circular.png"
   */
  logoCircular?: string;

  /**
   * Ruta del logo del cerdito vaquero centrado sobre el título.
   * Ejemplo: "/assets/cerdito.png"
   */
  logoCerdito?: string;
}

// ─── Variantes de animación Framer Motion ─────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// ─── Componente principal ─────────────────────────────────────
const Hero: React.FC<HeroProps> = ({
  // TODO: reemplaza estas rutas con las definitivas
  bgImage = '/assets/TODO_BG_IMAGE.jpg',
  logoCircular = '/assets/TODO_LOGO_CIRC.png',
  logoCerdito = '/assets/TODO_CERDITO.png',
}) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden isolate"
      aria-label="Hero — Taquitos Casa Blanca"
    >
      {/* ── 1. FONDO ── */}
      {/* TODO: Vincula tu foto de fondo cambiando la prop bgImage  */}
      <div
        className="absolute inset-0 min-h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
        role="img"
        aria-label="Foto de fondo de tacos Casa Blanca"
      />

      {/* ── 2. OVERLAY oscuro para contraste ── */}
      <div className="absolute inset-0 min-h-full bg-black/40" />

      {/* ── 3. NAVEGACIÓN flotante ── */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Logo nav — izquierda (flotante, sin recorte) */}
        {/* TODO: Cambia logoCircular con la ruta de tu logo final */}
        <a href="#" aria-label="Ir al inicio">
          <img
            src={logoCircular}
            alt="Logo Taquitos Casa Blanca"
            className="h-12 w-auto drop-shadow-lg transition-opacity duration-200 hover:opacity-90"
          />
        </a>

        {/* Icono menú — derecha */}
        <button
          aria-label="Abrir menú"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm transition-all duration-200 hover:bg-black/50 active:scale-95"
        >
          <Menu size={26} color="#FFFFFF" strokeWidth={2} />
        </button>
      </motion.nav>

      {/* ── 4. CONTENIDO CENTRAL — en flujo normal (no absolute) ── */}
      {/*    Con min-h-[100dvh] en el section, este div empuja la        */}
      {/*    sección hacia abajo si el contenido lo necesita, en lugar   */}
      {/*    de desbordarse o cortarse.                                   */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2 px-6 pt-20 pb-10 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        {/* ── 4a. Logo cerdito vaquero ── */}
        <motion.div variants={fadeInUp}>
          <img
            src={logoCerdito}
            alt="Cerdito vaquero de Monterrey — mascota Casa Blanca"
            className="
              h-[38vh] max-h-[240px]
              w-auto object-contain
              drop-shadow-2xl
              sm:h-[42vh] sm:max-h-[280px]
              md:h-[40vh] md:max-h-[300px]
              [@media(max-aspect-ratio:4/3)]:h-[28vh]
              [@media(max-aspect-ratio:4/3)]:max-h-[200px]
            "
          />
        </motion.div>

        {/* ── 4b. Título impactante ── */}
        <motion.h1
          variants={fadeInUp}
          style={{
            textShadow: '0 3px 0 rgba(0,0,0,0.6), 0 6px 20px rgba(0,0,0,0.4)',
          }}
          className="
            text-display
            text-5xl
            uppercase
            leading-[1.0]
            tracking-tight
            text-white
            sm:text-6xl
            md:text-7xl
            md:leading-[1.1]
            lg:text-8xl
          "
        >
          Los autenticos de Chiapas
          <br />
          en Monterrey
        </motion.h1>

        {/* ── 4c. Subtítulo ── */}
        <motion.p
          variants={fadeInUp}
          className="
            max-w-sm
            text-base
            font-medium
            leading-relaxed
            text-white/90
            drop-shadow-md
            sm:max-w-md
            sm:text-lg
          "
        >
          Ahora en San Pedro Garza García.
        </motion.p>

        {/* ── 4d. Botón CTA ── */}
        <motion.div variants={fadeInUp} className="pt-2">
          <a
            href="#menu"
            id="cta-ver-menu"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary-orange
              px-10
              py-4
              text-base
              font-bold
              uppercase
              tracking-widest
              text-brand-black
              shadow-[0_4px_24px_rgba(243,146,0,0.50)]
              transition-all
              duration-200
              hover:scale-105
              hover:shadow-[0_6px_32px_rgba(243,146,0,0.70)]
              active:scale-95
              sm:px-12
              sm:py-5
              sm:text-lg
            "
          >
            Ver Menú
            {/* Ícono flecha derecha animado */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
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
