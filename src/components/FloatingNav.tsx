'use client';

/**
 * FloatingNav.tsx — Botón hamburguesa flotante fijo
 *
 * Siempre visible en la esquina superior derecha independientemente del scroll.
 * Contiene el panel lateral de navegación completo.
 * Se importa en index.astro con client:load.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Menú', href: '#menu' },
  { label: 'Contacto', href: '#contacto' },
];

// ─── Variantes ────────────────────────────────────────────────
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.22 } },
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: '0%', transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '100%', transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] } },
};

const linkContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Componente ───────────────────────────────────────────────
const FloatingNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* ── Botón hamburguesa — siempre fijo en top-right ── */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        whileTap={{ scale: 0.88 }}
        className="fixed right-4 top-4 z-[150] flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-md shadow-lg transition-colors duration-200 hover:bg-black/55"
        style={{ display: open ? 'none' : 'flex' }}
      >
        <Menu size={24} color="#FFFFFF" strokeWidth={2} />
      </motion.button>

      {/* ── Menú panel + overlay ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Panel lateral */}
            <motion.nav
              key="panel"
              id="nav-panel"
              role="dialog"
              aria-label="Menú de navegación"
              aria-modal="true"
              className="fixed right-0 top-0 z-[170] flex h-full w-[min(340px,90vw)] flex-col"
              style={{
                background: 'linear-gradient(160deg, #3a1800 0%, #8a4200 50%, #3a1800 100%)',
              }}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Cabecera */}
              <div className="flex items-center justify-between px-6 py-5">
                <span
                  style={{ fontFamily: "'Bungee Shade', cursive", color: '#ffffffff', fontSize: '20px' }}
                >
                  Casa Blanca
                </span>
                <motion.button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  whileTap={{ scale: 0.88 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10"
                >
                  <X size={22} strokeWidth={2} />
                </motion.button>
              </div>

              {/* Separador */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#F39200]/60 to-transparent" />

              {/* Links */}
              <motion.ul
                className="flex flex-1 flex-col justify-center gap-1 px-6 py-8"
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 hover:bg-white/[0.06]"
                    >
                      <span className="h-[2px] w-5 flex-shrink-0 rounded-full bg-[#F39200] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      <span
                        style={{ fontFamily: "'Bungee Shade', cursive" }}
                        className="text-2xl leading-tight text-white/90 transition-colors duration-200 group-hover:text-[#F39200] sm:text-3xl"
                      >
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Separador */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#F39200]/60 to-transparent" />

              {/* Pie */}
              <div className="px-6 py-6 text-center">
                <p
                  className="text-[11px] uppercase tracking-[0.22em] text-white/30"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700 }}
                >
                  Taquitos Casa Blanca · Desde 1979
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
