import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Masonry from "react-masonry-css";

export default function Gallery() {

    const images = [
        "/images/pre1.svg",
        "/images/pre2.svg",
        "/images/pre3.svg",
        "/images/pre4.svg",
        "/images/pre5.svg",
        "/images/pre6.svg",
    ];

    const breakpointColumnsObj = {
        default: 2,
    };


    return (
        <>
            <section id="gallery" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-20 text-center relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-15"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-8"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-white text-4xl md:text-3xl font-praise mb-2"
                        >
                            Gallery
                        </motion.span>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-white max-w-md mx-auto"
                        >
                            Sebuah galeri yang menyimpan kisah cinta kami dalam balutan tawa, doa, dan harapan
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-4 mt-6"
                        >
                            <div className="h-[1px] w-12 bg-rose-200" />
                            <div className="text-rose-400">
                                <Heart className="w-4 h-4" fill="currentColor" />
                            </div>
                            <div className="h-[1px] w-12 bg-rose-200" />
                        </motion.div>

                    </motion.div>

                    {/* Events Grid */}
                    <div className="container mx-auto px-0">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="flex gap-4"
                            columnClassName="space-y-4"
                        >
                            {images.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="overflow-hidden rounded-lg"
                            >
                                <img
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                className="w-full h-auto object-cover"
                                />
                            </motion.div>
                            ))}
                        </Masonry>
                    </div>
                </motion.div>
            </section>
        </>
    )
}