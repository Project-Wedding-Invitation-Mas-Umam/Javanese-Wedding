import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Hero() {

    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${i % 3 === 0 ? 'text-rose-400' :
                                i % 3 === 1 ? 'text-pink-400' :
                                    'text-red-400'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section
                id="home"
                className="
                    min-h-screen flex flex-col items-center justify-center 
                    px-4 py-16 sm:py-20 text-center relative overflow-hidden 
                    bg-[linear-gradient(180deg,_rgba(0,0,0,0.5)_80%,_#261D20_95.62%),url('images/GambarAwal.svg')] 
                    bg-no-repeat bg-center bg-cover
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 relative z-10"
                >
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white  italic text-base sm:text-lg"
                        >
                            The Wedding of
                        </motion.p>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-6xl sm:text-7xl font-praise text-white leading-snug"
                            >
                            <div>{config.data.brideName}</div>
                            <div style={{ color: '#8b7e7eff' }}>&</div>
                            <div>{config.data.groomName}</div>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white  italic text-base sm:text-lg"
                        >
                            {formatEventDate(config.data.date, "full")}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative max-w-xs mx-auto" // makin kecil: xs
                        >
                        <div
                            className="absolute inset-0 backdrop-blur-md"
                            style={{
                            borderRadius: "40px 8px",
                            border: "1px solid #EEDCDA",
                            background: "#2B2326",
                            boxShadow: `
                                0px 161px 45px 0px rgba(0, 0, 0, 0.00),
                                0px 103px 41px 0px rgba(0, 0, 0, 0.01),
                                0px 58px 35px 0px rgba(0, 0, 0, 0.05),
                                0px 26px 26px 0px rgba(0, 0, 0, 0.09),
                                0px 6px 14px 0px rgba(0, 0, 0, 0.10)
                            `,
                            }}
                        />

                        <div
                            className="relative px-3 py-4 text-white"
                            style={{
                            borderRadius: "40px 8px",
                            border: "1px solid #EEDCDA",
                            background: "#2B2326",
                            boxShadow: `
                                0px 161px 45px 0px rgba(0, 0, 0, 0.00),
                                0px 103px 41px 0px rgba(0, 0, 0, 0.01),
                                0px 58px 35px 0px rgba(0, 0, 0, 0.05),
                                0px 26px 26px 0px rgba(0, 0, 0, 0.09),
                                0px 6px 14px 0px rgba(0, 0, 0, 0.10)
                            `,
                            }}
                        >
                            <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="italic text-xs text-[#EEDCDA]" // lebih kecil dari text-sm
                            >
                            {config.data.quotes}
                            </motion.p>
                        </div>

                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-rose-100/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-rose-100/20 rounded-full blur-xl" />
                    </motion.div>

                    <div className="pt-6 relative">
                        <FloatingHearts />
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-rose-500 mx-auto" fill="currentColor" />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
