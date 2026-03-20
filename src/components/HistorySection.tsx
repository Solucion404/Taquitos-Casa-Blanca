import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const HistorySection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* ── Top Layout: Texto + Imagen (2 columnas en desktop) ── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
        >
          {/* Col 1: Texto Narrativo */}
          <div className="order-2 md:order-1">
            <h2 
              style={{ fontFamily: "'Bungee Shade', cursive" }}
              className="mb-8 text-4xl leading-tight text-[#F39200] md:text-5xl lg:text-6xl"
            >
              NUESTRA<br />HISTORIA
            </h2>
            <div className="space-y-5 font-serif text-lg leading-relaxed text-gray-800 md:text-xl">
              <p>
                Todo comenzó en <span className="font-bold text-[#F39200]">1979</span>. Nuestro puesto original estaba ubicado justo frente a una prestigiosa boutique llamada <span className="font-bold italic">"Casa Blanca"</span>.
              </p>
              <p>
                Fueron nuestros propios clientes quienes, al darnos cuenta de la referencia obligada para encontrarnos, nos bautizaron cariñosamente con ese nombre. Desde entonces, el apellido de nuestro sabor quedó marcado en la historia.
              </p>
            </div>
          </div>

          {/* Col 2: Imagen representativa */}
          <div className="order-1 h-72 w-full overflow-hidden rounded-3xl object-cover shadow-2xl md:order-2 md:h-[450px]">
            {/* TODO: Reemplazar con foto histórica real si existe */}
            <img 
              src="/assets/foto_8.jpg" 
              alt="Historia de Taquitos Casa Blanca" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* ── Bento Grid de Legado (3 Tarjetas) ── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {/* Tarjeta 1 */}
          <motion.article 
            variants={fadeInUp}
            className="flex flex-col justify-center rounded-3xl bg-[#FDF6EC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <h3 
              style={{ fontFamily: "'Bungee Shade', cursive" }}
              className="mb-4 text-2xl leading-tight text-[#F39200] md:text-3xl"
            >
              LA ALQUIMIA<br />DEL COCHITO
            </h3>
            <p className="font-sans text-base leading-relaxed text-gray-700">
              Nuestra receta secreta se basa en una cuidadosa selección de chiles y especias, combinada con un proceso de <strong>cocción lenta</strong> que garantiza una textura que se deshace en la boca.
            </p>
          </motion.article>

          {/* Tarjeta 2 */}
          <motion.article 
            variants={fadeInUp}
            className="flex flex-col justify-center rounded-3xl bg-[#FDF6EC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <h3 
              style={{ fontFamily: "'Bungee Shade', cursive" }}
              className="mb-4 text-2xl leading-tight text-[#F39200] md:text-3xl"
            >
              7 HERMANOS,<br />1 LEGADO
            </h3>
            <p className="font-sans text-base leading-relaxed text-gray-700">
              Iniciado con pasión por nuestro padre, hoy este legado es mantenido vivo y perfeccionado por sus <strong>7 hermanos</strong> y nuestra madre en unión familiar.
            </p>
          </motion.article>

          {/* Tarjeta 3 */}
          <motion.article 
            variants={fadeInUp}
            className="flex flex-col justify-center rounded-3xl bg-[#FDF6EC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <h3 
              style={{ fontFamily: "'Bungee Shade', cursive" }}
              className="mb-4 text-2xl leading-tight text-[#F39200] md:text-3xl"
            >
              BEBIDA<br />DE DIOSES
            </h3>
            <p className="font-sans text-base leading-relaxed text-gray-700">
              El complemento perfecto. Nuestro icónico <strong>Pozol</strong> de cacao y maíz molido a mano refresca paladares desde hace más de cuatro décadas.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default HistorySection;
