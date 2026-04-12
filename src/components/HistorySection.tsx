import React from 'react';
import { motion } from 'framer-motion';

// ─── Variantes de animación ────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ─── Remache de esquina ────────────────────────────────────────
// Simula una tachuela/clavo metálico de bronce envejecido
const Rivet = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const pos: Record<string, string> = {
    tl: 'top-3 left-3',
    tr: 'top-3 right-3',
    bl: 'bottom-3 left-3',
    br: 'bottom-3 right-3',
  };
  return (
    <span
      className={`absolute ${pos[position]} h-[14px] w-[14px] rounded-full`}
      style={{
        background:
          'radial-gradient(circle at 35% 32%, #d4a96a 0%, #8b5e2e 55%, #3e2410 100%)',
        boxShadow:
          '0 2px 4px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,220,150,0.3)',
      }}
      aria-hidden="true"
    />
  );
};

// ─── Tarjeta de pergamino ──────────────────────────────────────
interface ParchmentCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const ParchmentCard: React.FC<ParchmentCardProps> = ({ title, children }) => (
  <motion.article
    variants={fadeInUp}
    className="relative flex flex-col justify-start rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
    style={{
      // Gradiente multicapa que simula papel/cuero envejecido
      background:
        'linear-gradient(155deg, #f8eabf 0%, #eecf7a 18%, #ddb94e 38%, #e6c96e 55%, #eed98e 72%, #f6e8b4 88%, #fdf3cc 100%)',
      // Sombra inset para profundidad + sombra exterior para elevation
      boxShadow:
        'inset 0 0 35px rgba(90, 50, 5, 0.22), inset 0 0 8px rgba(60,30,0,0.10), 0 10px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)',
      border: '1.5px solid rgba(110, 70, 10, 0.35)',
    }}
  >
    {/* ── Remaches en las 4 esquinas ── */}
    <Rivet position="tl" />
    <Rivet position="tr" />
    <Rivet position="bl" />
    <Rivet position="br" />

    {/* ── Título western ── */}
    <h3
      style={{
        fontFamily: "'Bungee Shade', cursive",
        color: '#7a3d0a',
        textShadow: '1px 1px 0 rgba(255, 210, 120, 0.5), 0 2px 4px rgba(0,0,0,0.15)',
        lineHeight: 1.15,
      }}
      className="mb-5 text-2xl md:text-3xl"
    >
      {title}
    </h3>

    {/* ── Cuerpo ── */}
    <p
      className="text-base leading-relaxed"
      style={{
        color: '#3d1f05',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {children}
    </p>
  </motion.article>
);

// ─── Componente principal ──────────────────────────────────────
const HistorySection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed px-6 pt-36 pb-24"
      style={{ backgroundImage: "url('/assets/cerdito_flow_1.jpg')" }}
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 min-h-full bg-black/55" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── Top Layout: Texto + Imagen ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
        >
          {/* Col 1: Texto Narrativo */}
          <div className="order-1 md:order-1">
            <h2
              style={{ fontFamily: "'Bungee Shade', cursive" }}
              className="mb-8 text-4xl leading-tight text-[#F39200] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-5xl lg:text-6xl"
            >
              NUESTRA<br />HISTORIA
            </h2>
            <div className="space-y-5 font-serif text-lg leading-relaxed text-white/90 md:text-xl">
              <p>
                Todo comenzó en{' '}
                <span className="font-bold text-[#F39200]">1979</span>. Nuestro
                puesto original estaba ubicado justo frente a una prestigiosa
                boutique llamada{' '}
                <span className="font-bold italic">"Casa Blanca"</span>.
              </p>
              <p>
                Fueron nuestros propios clientes quienes, al darnos cuenta de
                la referencia obligada para encontrarnos, nos bautizaron
                cariñosamente con ese nombre. Desde entonces, el apellido de
                nuestro sabor quedó marcado en la historia.
              </p>
            </div>
          </div>

          {/* Col 2: Imagen representativa */}
          <div className="order-2 h-72 w-full overflow-hidden rounded-3xl shadow-2xl md:order-2 md:h-[450px]">
            <img
              src="/assets/foto_8.jpg"
              alt="Historia de Taquitos Casa Blanca"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* ── Grid de Tarjetas Pergamino ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <ParchmentCard title={<>LA ALQUIMIA<br />DEL COCHITO</>}>
            Nuestra receta secreta se basa en una cuidadosa selección de chiles
            y especias, combinada con un proceso de{' '}
            <strong>cocción lenta</strong> que garantiza una textura que se
            deshace en la boca.
          </ParchmentCard>

          <ParchmentCard title={<>7 HERMANOS,<br />1 LEGADO</>}>
            Iniciado con pasión por nuestro padre, hoy este legado es mantenido
            vivo y perfeccionado por sus <strong>7 hermanos</strong> y nuestra
            madre en unión familiar.
          </ParchmentCard>

          <ParchmentCard title={<>BEBIDA<br />DE DIOSES</>}>
            El complemento perfecto. Nuestro icónico <strong>Pozol</strong> de
            cacao y maíz molido a mano refresca paladares desde hace más de
            cuatro décadas.
          </ParchmentCard>
        </motion.div>

      </div>
    </section>
  );
};

export default HistorySection;
