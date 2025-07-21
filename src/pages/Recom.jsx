import config from '@/config/config';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => (
    <h2 className="text-xl font-semibold text-center text-white my-4">{children}</h2>
);

const HotelCard = ({ name, distance }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-[#3E3235] rounded-xl p-4 text-center text-white shadow-md"
  >
    <div className="font-bold">{name}</div>
    <div className="text-sm">{distance}</div>
  </motion.div>
);

export default function Recom() {
    return (
        <>
            {/* Event Section */}
            <section id="event" className="relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-12"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-10"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-white text-4xl md:text-3xl font-praise mb-2"
                        >
                            Rekomendasi Hotel Terdekat
                        </motion.span>

                    </motion.div>

                    {/* Akad Nikah */}
                    <SectionTitle>Akad Nikah</SectionTitle>
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 gap-4 mb-8 px-4"
                    >
                        {config.data.hotelAkad.map((hotel, index) => (
                            <HotelCard key={`akad-${index}`} {...hotel} />
                        ))}
                    </motion.div>

                    {/* Resepsi */}
                    <SectionTitle>Resepsi</SectionTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4 px-4"
                    >
                        {config.data.hotelResepsi.map((hotel, index) => (
                            <HotelCard key={`resepsi-${index}`} {...hotel} />
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}