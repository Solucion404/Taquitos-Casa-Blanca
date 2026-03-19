/**
 * menu.ts — Datos del menú de Taquitos Casa Blanca
 * Fuente: Menú físico (menu.jpg)
 * Última actualización: Marzo 2025
 *
 * Para añadir o editar platillos, modifica este archivo.
 * Las imágenes deben colocarse en /public/assets/ y referenciar su ruta aquí.
 */

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  /** Precio alternativo (ej. tamaño mediano) */
  priceAlt?: number;
  /** Etiqueta del precio alternativo (ej. "Med.") */
  priceAltLabel?: string;
  description?: string;
  category: 'tacos' | 'carnes' | 'especiales' | 'bebidas';
  /**
   * Ruta de la imagen del platillo.
   * Debe existir en /public/assets/
   * Ejemplo: "/assets/foto_1.jpg"
   * TODO: Vincular fotos reales de la carpeta /Fotos/
   */
  image?: string;
}

export const menuData: MenuItem[] = [
  // ─── TACOS ───────────────────────────────────────────────────
  {
    id: 'taco-surtida',
    name: 'Taco Surtida',
    price: 28,
    category: 'tacos',
    description: 'Taco de carne surtida al estilo Chiapas',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'taco-maciza',
    name: 'Taco Maciza',
    price: 28,
    category: 'tacos',
    description: 'Taco de maciza, corte selecto de cerdo',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },

  // ─── CARNES ──────────────────────────────────────────────────
  {
    id: 'carne-cuarto-kilo',
    name: '¼ Kilo de Carne',
    price: 180,
    category: 'carnes',
    description: 'Cuarto kilo de carne al estilo Casa Blanca',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'carne-medio-kilo',
    name: '½ Kilo de Carne',
    price: 360,
    category: 'carnes',
    description: 'Medio kilo de carne al estilo Casa Blanca',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'carne-un-kilo',
    name: '1 Kilo de Carne',
    price: 700,
    category: 'carnes',
    description: 'Un kilo completo de carne al estilo Casa Blanca',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },

  // ─── ESPECIALES ──────────────────────────────────────────────
  {
    id: 'especial-quesadilla',
    name: 'Quesadilla',
    price: 60,
    category: 'especiales',
    description: 'Quesadilla artesanal con queso fundido',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'especial-torta',
    name: 'Torta',
    price: 110,
    category: 'especiales',
    description: 'Torta de adobada con ingredientes frescos',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'especial-chilaquiles',
    name: 'Chilaquiles',
    price: 170,
    category: 'especiales',
    description: 'Chilaquiles al estilo Chiapas con salsa de la casa',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },

  // ─── BEBIDAS ─────────────────────────────────────────────────
  {
    id: 'bebida-pozol-cacao',
    name: 'Pozol Cacao',
    price: 60,
    priceAlt: 35,
    priceAltLabel: 'Med.',
    category: 'bebidas',
    description: 'Bebida tradicional chiapaneca de cacao',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'bebida-refresco',
    name: 'Refresco / Agua',
    price: 30,
    category: 'bebidas',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'bebida-agua-fresca',
    name: 'Aguas Frescas',
    price: 27,
    category: 'bebidas',
    description: 'Aguas frescas del día',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'bebida-cafe',
    name: 'Café',
    price: 35,
    category: 'bebidas',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
  {
    id: 'bebida-cafe-frio',
    name: 'Café Frío',
    price: 45,
    category: 'bebidas',
    image: undefined, // TODO: '/assets/foto_X.jpg'
  },
];

/** Categorías disponibles con etiqueta de display */
export const categories: { value: MenuItem['category'] | 'todos'; label: string }[] = [
  { value: 'todos',      label: 'Todos' },
  { value: 'tacos',     label: 'Tacos' },
  { value: 'carnes',    label: 'Carnes' },
  { value: 'especiales', label: 'Especiales' },
  { value: 'bebidas',   label: 'Bebidas' },
];
