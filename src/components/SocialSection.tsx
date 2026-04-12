'use client';

/**
 * SocialSection.tsx — Sección de Redes Sociales
 *
 * Fondo: cerdito_flow_2.jpg (madera quemada con el cerdito grabado)
 * Layout: 2 columnas — Instagram | Facebook
 * Estilo: glassmorphism cálido sobre madera oscura
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

// ─── Datos de redes ───────────────────────────────────────────
const SOCIAL = {
  instagram: {
    handle:    '@taquitoscasablancamty',
    url:       'https://www.instagram.com/taquitoscasablancamty',
    color:     '#E1306C',
    gradient:  'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    Icon:      Instagram,
  },
  facebook: {
    handle:    'Taquitos Casa Blanca MTY',
    url:       'https://www.facebook.com/people/Taquitos-Casa-Blanca-MTY/61587838586002/',
    color:     '#1877F2',
    gradient:  'from-[#1877F2] to-[#0d5fc4]',
    Icon:      Facebook,
  },
};

// ─── Variantes ────────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

// ─── Tarjeta social ───────────────────────────────────────────
interface CardProps {
  data: typeof SOCIAL.instagram;
  logo: string;
}

const SocialCard: React.FC<CardProps> = ({ data, logo }) => {
  const { handle, url, gradient, Icon } = data;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group flex flex-col items-center gap-5 rounded-3xl border border-white/20 bg-black/35 p-8 text-center shadow-2xl backdrop-blur-md transition-colors duration-300 hover:bg-black/50 md:p-10"
    >
      {/* Logo del cerdito Casa Blanca */}
      <div className="relative">
        <img
          src={logo}
          alt="Logo Taquitos Casa Blanca"
          className="h-24 w-24 rounded-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28"
          style={{ background: 'rgba(255,255,255,0.08)', padding: '6px' }}
        />
        {/* Badge de red social */}
        <div className={`absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon size={16} color="#fff" strokeWidth={2.5} />
        </div>
      </div>

      {/* Handle */}
      <div>
        <p
          className="text-lg font-bold text-white/80 md:text-xl"
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          {handle}
        </p>
      </div>

      {/* CTA Button */}
      <span
        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-shadow duration-300 group-hover:shadow-[0_6px_30px_rgba(0,0,0,0.4)]`}
      >
        <Icon size={15} strokeWidth={2.5} />
        Seguir
      </span>
    </motion.a>
  );
};

// ─── Componente principal ──────────────────────────────────────
const SocialSection: React.FC = () => (
  <section
    id="redes"
    className="relative overflow-hidden py-24 px-6"
    aria-label="Redes Sociales — Taquitos Casa Blanca"
  >
    {/* ── Fondo: madera con cerdito grabado ── */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/cerdito_flow_2.jpg')" }}
      aria-hidden="true"
    />
    {/* Overlay oscuro cálido */}
    <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

    {/* ── Contenido ── */}
    <motion.div
      className="relative z-10 mx-auto max-w-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger}
    >
      {/* Título */}
      <motion.div variants={fadeInUp} className="mb-14 text-center">
        <p
          className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F39200]/80"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Únete a nuestra comunidad
        </p>
        <h2
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-4xl leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl"
        >
          SÍGUENOS
        </h2>
        <p className="mt-4 text-base font-medium text-white/60 md:text-lg">
          Mira nuestro día a día, promociones y más sabor de Chiapas.
        </p>
      </motion.div>

      {/* Grid 2 columnas */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        variants={stagger}
      >
        <SocialCard
          data={SOCIAL.instagram}
          logo="/assets/cerditoo-removebg-preview.png"
        />
        <SocialCard
          data={SOCIAL.facebook}
          logo="/assets/cerditoo-removebg-preview.png"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default SocialSection;
