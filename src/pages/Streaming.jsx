import config from '@/config/config';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { useEffect, useState } from 'react';

// Helper function untuk ambil ID YouTube
const getYouTubeId = (url) => {
    const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
};

export default function Gifts() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const stream = config.data.liveStreaming[0]; // hanya ambil 1 data

    return (
        <section id="streaming" className="bg-[#EEDCDA] relative overflow-hidden">
        <div className="container mx-auto px-4  relative z-10">
            {/* Section Header */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-8"
            >
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block text-darkText text-4xl md:text-3xl font-praise"
            >
                Live Streaming
            </motion.span>

            <motion.div
                initial={{ scale: 0 }}
                animate={hasAnimated ? { scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4"
            >
                <div className="h-[1px] w-12 bg-[#2B2326]" />
                <Video className="w-5 h-5 text-rose-400" />
                <div className="h-[1px] w-12 bg-[#2B2326]" />
            </motion.div>
            </motion.div>

            {/* Live Streaming Embed */}
            {stream && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-black rounded-2xl overflow-hidden shadow-md max-w-3xl mx-auto mx-4"
                >
                    <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${getYouTubeId(stream.link)}?autoplay=0`}
                    title={`Live Streaming from ${stream.platform}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </motion.div>
            )}

            {/* Decorative Element */}
            <motion.div
            initial={{ scale: 0 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-3 pt-8"
            >
            <div className="h-px w-8 bg-[#2B2326]" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
            <div className="h-px w-8 bg-[#2B2326]" />
            </motion.div>
        </div>
        </section>
    );
}
