import config from '@/config/config';
import { motion } from 'framer-motion';

export default function StoryMe() {
    const stories = config.data.loveStory || [];

const Card = ({ image, title, description }) => (
    <div className="relative flex flex-col items-center p-6">
        {/* Gambar & Ornamen */}
        <div className="relative w-full max-w-sm z-0">
        <img
            src={image}
            alt="Couple"
            className="w-full h-full object-cover rounded-xl aspect-[3/4]"
        />

        {/* Ornamen bunga atas kanan */}
        <img
            src="/images/bingkai.svg"
            className="absolute -top-6 -right-10 w-24 h-24 scale-x-[-1] scale-y-[-1]"
            alt="Ornamen atas"
        />

        {/* Ornamen bunga bawah kiri */}
        <img
            src="/images/bingkai.svg"
            className="absolute -bottom-6 -left-10 w-24 h-24"
            alt="Ornamen bawah"
        />
        </div>

        {/* Card Teks yang sedikit menumpuk ke gambar */}
        <div className="relative -mt-12 w-full max-w-sm z-10">
        <div className="bg-[#F5E5E7] rounded-xl p-6 shadow-lg text-[#3D2C2E] border border-blue-500">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
        </div>
    </div>
);

const TimelineCard = ({ date, title, description, position = 'left' }) => (
    <div className="mb-4">
        <div className="bg-[#FDF2F2] rounded-2xl px-6 py-4 shadow-md flex justify-between items-center gap-4">
            {position === 'left' && (
            <div className="flex flex-col items-center justify-center text-[#2B2326] font-bold text-3xl w-14">
                {new Date(date).getDate()}
            </div>
            )}
            <div className="text-left flex-1">
            <p className="text-sm text-gray-600 font-semibold mb-1">
                {new Date(date).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                })}
            </p>
            <p className="text-sm text-gray-700">“{description}”</p>
            </div>
            {position === 'right' && (
            <div className="flex flex-col items-center justify-center text-[#2B2326] font-bold text-3xl w-14">
                {new Date(date).getDate()}
            </div>
            )}
        </div>
    </div>
);

return (
    <section id="love-story" className="bg-[#2B2326] py-12 text-white relative overflow-hidden pb-0">
        <div className="container mx-auto max-w-2xl relative z-10 pb-10">
            
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-3xl font-praise mb-8"
            >
            Cerita Kami
            </motion.h2>

            {/* Hero Story Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
            <Card
                image={config.data.storyCover}
                title="Cerita Kami"
                description="Lorem ipsum is the most well known filler text and comes from various"
            />
            </motion.div>

            {/* Timeline Stories */}
            <div className="space-y-4 mt-6 relative">
                <img
                    src="/images/bunga-card.svg"
                    alt="Bunga Tengah"
                    className="absolute top-1/2 left-1/2 w-80 md:w-[28rem] opacity-10 scale-x-[-1] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
            {stories.map((story, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <TimelineCard
                    date={story.date}
                    title={story.title}
                    description={story.description}
                    position={index % 2 === 0 ? 'left' : 'right'}
                />
                </motion.div>
            ))}
            </div>
        </div>

        <div className="relative w-full mt-[-80px] z-0">
        {/* Wave belakang */}
        <svg
            className="block w-full h-[120px] relative z-0"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
            d="M0,40 C480,160 960,-40 1440,80 L1440,120 L0,120 Z"
            fill="#3E3235"
            opacity="0.5"
            />
        </svg>

        {/* Gunungan kiri – diputar miring kanan */}
        <img
        src="/images/Gunungan.svg"
        alt="Gunungan Kiri"
        className="absolute bottom-0 -left-5 w-32 md:w-44 opacity-50 rotate-[10deg] z-10"
        />

        {/* Gunungan kanan – diputar miring kiri */}
        <img
        src="/images/Gunungan.svg"
        alt="Gunungan Kanan"
        className="absolute bottom-0 -right-5 w-32 md:w-44 scale-x-[-1] opacity-50 -rotate-[10deg] z-10"
        />



        {/* Wave depan */}
        <svg
            className="block w-full h-[120px] -mt-[120px] relative z-20"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
            d="M0,80 C480,-40 960,160 1440,40 L1440,120 L0,120 Z"
            fill="#3E3235"
            />
        </svg>
        </div>
    </section>
  );
}
