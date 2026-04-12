import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

// El negocio ya tiene listado en Google Maps — buscamos por nombre para centrar el pin exacto
const mapEmbedUrl = "https://maps.google.com/maps?q=Taquitos+Casa+Blanca+Del+Valle+San+Pedro+Garza+Garcia&z=18&output=embed";

const FooterContact: React.FC = () => {
  return (
    <section id="contacto" className="bg-[#FDF6EC] py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* ── Título Central ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2
            style={{ fontFamily: "'Bungee Shade', cursive" }}
            className="text-4xl leading-tight text-[#F39200] md:text-5xl lg:text-7xl"
          >
            VEN POR<br />LOS TUYOS
          </h2>
        </motion.div>

        {/* ── Grid Principal (Datos + Mapa) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Bloque Izquierdo: Información Rápida (Stacked) */}
          <div className="flex flex-col gap-5">

            {/* Tarjeta 1: Ubicación */}
            <motion.a
              href="https://www.google.com/maps/search/Taquitos+Casa+Blanca+Del+Valle+San+Pedro+Garza+Garcia"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group flex flex-col gap-4 rounded-2xl bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(243,146,0,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDF6EC] text-[#F39200] transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mb-1">Visítanos</h3>
                  <p className="font-sans text-[15px] leading-relaxed text-gray-600">
                    Vasconcelos 647 Humberto Lobo Y Rio, Del Valle, 66220 San Pedro Garza García, N.L.
                  </p>
                  <span className="mt-3 inline-block font-sans text-sm font-bold text-[#F39200] underline decoration-2 underline-offset-4 transition-all group-hover:text-amber-600">
                    Abrir en Maps →
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Tarjeta 2: Horarios */}
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDF6EC] text-[#F39200]">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mb-1">Horarios</h3>
                <div className="font-sans text-[15px] leading-relaxed text-gray-600">
                  <p>Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  <p className="font-sans text-[15px] leading-relaxed text-gray-600">Sábado y Domingo: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bloque Derecho: Mapa Interactivo */}
          <motion.div
            variants={fadeInUp}
            className="group relative flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-3xl bg-gray-200 shadow-lg md:min-h-[500px]"
          >
            {/* Overlay Naranja (Desaparece en hover para indicar interactividad) */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[#F39200] mix-blend-multiply opacity-20 transition-opacity duration-500 group-hover:opacity-0" />

            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "saturate(0.9) contrast(1.1)" }}
            />
          </motion.div>

        </motion.div>

        {/* ── Créditos Finales ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 border-t border-brand-black/10 pt-8 text-center"
        >
          <p className="font-sans text-sm font-semibold tracking-wide text-gray-500">
            Desarrollado por <a href="https://solucion404.com" target="_blank" rel="noopener noreferrer" className="text-[#F39200] hover:underline">Solución404</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FooterContact;
