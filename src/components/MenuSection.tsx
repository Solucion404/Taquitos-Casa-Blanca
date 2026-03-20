/**
 * MenuSection.tsx — Sección de Menú de Taquitos Casa Blanca
 * Fase 2: Menú interactivo con filtros por categoría
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │  GUÍA DE IMÁGENES                                           │
 * │  Para añadir fotos a los platillos, edita src/data/menu.ts  │
 * │  y agrega la ruta en el campo `image` de cada MenuItem.     │
 * │  Ejemplo: image: "/assets/foto_3.jpg"                       │
 * └─────────────────────────────────────────────────────────────┘
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, categories, type MenuItem, type WeightOption } from '../data/menu';

// ─── Tipos ────────────────────────────────────────────────────
type CategoryFilter = MenuItem['category'] | 'todos';

// ─── Variantes de animación ───────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

// ─── Emoji placeholder por categoría ─────────────────────────
const categoryEmoji: Record<string, string> = {
  tacos: '🌮',
  carnes: '🥩',
  especiales: '⭐',
  bebidas: '🥤',
};

// ─── Sub-componente: Super-Card de Carnes (selector de peso) ──
const CarneSuperCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const options = item.options as WeightOption[];
  const [selected, setSelected] = useState<WeightOption>(options[0]);

  return (
    <motion.article
      layout
      layoutId={item.id}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.16)' }}
      className="relative z-10 col-span-1 flex flex-col overflow-hidden rounded-3xl bg-[#FDD5A5] shadow-lg md:col-span-2"
      style={{ willChange: 'transform' }}
    >
      {/* Imagen superior */}
      {/* TODO: Vincular foto — image: '/assets/foto_X.jpg' en menu.ts */}
      <div className="relative h-48 w-full overflow-hidden bg-[#FFF8F0]">
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <span className="text-6xl opacity-40">🥩</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-black/30">
              foto próximamente
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col items-center gap-3 px-6 py-6 text-center">
        <h3 className="text-lg font-bold uppercase leading-tight text-brand-black">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-xs text-black/70">{item.description}</p>
        )}

        {/* Precio dinámico */}
        <AnimatePresence mode="wait">
          <motion.span
            key={selected.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            style={{ fontFamily: "'Bungee Shade', cursive" }}
            className="text-4xl text-[#F39200]"
          >
            ${selected.price}
          </motion.span>
        </AnimatePresence>

        {/* Selector de peso */}
        <div className="mt-1 flex flex-wrap justify-center gap-3">
          {options.map((opt) => {
            const isActive = opt.id === selected.id;
            return (
              <motion.button
                key={opt.id}
                onClick={() => setSelected(opt)}
                whileTap={{ scale: 0.93 }}
                className={`
                  flex flex-col items-center rounded-2xl border-2 px-5 py-3
                  transition-colors duration-200
                  ${isActive
                    ? 'border-[#F39200] bg-[#F39200]/10'
                    : 'border-transparent bg-white/60 hover:bg-white'
                  }
                `}
              >
                <span className="text-sm font-bold uppercase text-brand-black">
                  {opt.weight}
                </span>
                <span
                  style={{ fontFamily: "'Bungee Shade', cursive" }}
                  className="text-base text-[#F39200]/80"
                >
                  ${opt.price}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

// ─── Sub-componente: Tarjeta de platillo (vertical) ───────────
const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <motion.article
    layout
    layoutId={item.id}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}
    whileTap={{ scale: 0.98 }}
    className="flex flex-col overflow-hidden rounded-3xl bg-[#FDD5A5] shadow-lg"
    style={{ willChange: 'transform' }}
  >
    {/* ── Imagen superior ── */}
    {/* TODO: Vincular foto real — edita el campo `image` en src/data/menu.ts */}
    <div className="relative h-48 w-full flex-shrink-0 overflow-hidden bg-[#FFF8F0]">
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      ) : (
        /* Placeholder centrado mientras no haya foto */
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <span className="text-6xl opacity-40">
            {categoryEmoji[item.category] ?? '🍽️'}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-black/30">
            foto próximamente
          </span>
        </div>
      )}
    </div>

    {/* ── Contenido inferior ── */}
    <div className="flex flex-col items-center gap-1 px-4 py-5 text-center">
      {/* Nombre */}
      <h3 className="text-base font-bold uppercase leading-tight text-brand-black">
        {item.name}
      </h3>

      {/* Descripción (opcional) */}
      {item.description && (
        <p className="line-clamp-2 text-xs text-black/70">
          {item.description}
        </p>
      )}

      {/* Precio principal en Bungee Shade */}
      <motion.span
        whileTap={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 400, damping: 12 }}
        style={{ fontFamily: "'Bungee Shade', cursive" }}
        className="mt-2 text-3xl text-[#F39200]"
      >
        ${item.price}
      </motion.span>

      {/* Precio alternativo (ej. tamaño mediano) */}
      {item.priceAlt !== undefined && (
        <span
          style={{ fontFamily: "'Bungee Shade', cursive" }}
          className="text-lg text-[#F39200]/70"
        >
          {item.priceAltLabel ?? 'Alt.'} ${item.priceAlt}
        </span>
      )}
    </div>
  </motion.article>
);


// ─── Componente principal ─────────────────────────────────────
const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');

  const filtered =
    activeCategory === 'todos'
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="min-h-screen bg-white px-5 py-16 sm:px-8"
      aria-label="Menú — Taquitos Casa Blanca"
    >
      {/* ── Encabezado ── */}
      <div className="mb-10 text-center">
        <p className="mb-1 text-sm font-bold uppercase tracking-[0.25em] text-[#F39200]">
          Taquitos Casa Blanca
        </p>
        <h2
          style={{ fontFamily: "'Bungee Shade', cursive", textShadow: 'none' }}
          className="text-4xl uppercase leading-tight text-brand-black sm:text-5xl"
        >
          Nuestro Menú
        </h2>
        <p className="mt-3 text-sm font-bold text-brand-black/60">
          Av. José Vasconcelos 647 Pte. Del Valle, San Pedro Garza García
        </p>
      </div>

      {/* ── Filtros de categoría ── */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar por categoría">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            aria-pressed={activeCategory === cat.value}
            className={`
              rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide
              transition-all duration-200 active:scale-95
              ${activeCategory === cat.value
                ? 'bg-primary-orange text-brand-black shadow-[0_4px_16px_rgba(243,146,0,0.4)]'
                : 'bg-white/70 text-brand-black hover:bg-white'
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Grid de platillos ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
        >
          {filtered.map((item) =>
            item.options ? (
              <CarneSuperCard key={item.id} item={item} />
            ) : (
              <MenuCard key={item.id} item={item} />
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Nota de precios ── */}
      <p className="mt-12 text-center text-xs font-bold text-brand-black/40">
        Precios en pesos mexicanos. Pueden cambiar sin previo aviso.
      </p>
    </section>
  );
};

export default MenuSection;
