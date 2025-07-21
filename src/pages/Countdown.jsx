import config from '@/config/config';
import { safeBase64 } from '@/lib/base64';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [guestName, setGuestName] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const guestParam = urlParams.get('guest');

        if (guestParam) {
        try {
            const decodedName = safeBase64.decode(guestParam);
            setGuestName(decodedName);
        } catch (error) {
            console.error('Error decoding guest name:', error);
            setGuestName('');
        }
        }
    }, []);

    const CountdownTimer = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
            hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
            jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
            menit: Math.floor((difference / 1000 / 60) % 60),
            detik: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
        }
        useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
        }, [targetDate]);

        return (
            <div className="grid grid-cols-4 gap-4 mt-8 overflow-x-auto sm:overflow-visible px-2">
                {Object.keys(timeLeft).map((interval, index) => (
                    <motion.div
                    key={interval}
                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.2, // semakin belakang, semakin lambat masuk
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className="flex flex-col items-center"
                    >
                    {/* Kotak Angka */}
                    <div className="w-14 h-16 sm:w-16 sm:h-20 flex items-center justify-center rounded-xl bg-[#f3e4e6] text-darkText font-semibold text-xl sm:text-2xl relative overflow-hidden">
                        {/* Ornamen dalam kotak */}
                        <img
                        src="/images/ornamen-button.svg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
                        />
                        <span className="relative z-10">{timeLeft[interval]}</span>
                    </div>

                    {/* Label */}
                    <span className="mt-2 text-sm text-white capitalize">{interval}</span>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
        <section
            id="countdown"
            className="flex flex-col items-center justify-center px-4 py-16 sm:py-16 text-center relative overflow-hidden"
        >
            {/* ✅ Ornamen Tengah Global */}
            <img
            src="/images/ornamen-button.svg"
            alt="Ornamen"
            className="absolute w-full opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
            />

            {/* ✅ Efek Cahaya */}
            <div className="absolute w-60 h-60 bg-rose-100 opacity-15 blur-[80px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10 "
            >
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block text-white text-4xl md:text-3xl font-praise mb-2"
            >
                Perjalanan menuju hari bahagia
            </motion.span>

            <CountdownTimer targetDate={config.data.date} />

            <div className="pt-6 relative">
                {/* ✅ Tombol Tambahkan ke Kalender */}
                <motion.div className="mb-6 flex justify-center relative">
                <button
                    onClick={() => window.open(config.data.calendarLink, '_blank')}
                    className="relative z-10 flex items-center gap-2 bg-white/60 hover:bg-white/80 text-gray-800 font-serif font-semibold px-6 py-3 rounded-xl shadow-sm transition-all backdrop-blur-md overflow-hidden"
                >
                    {/* Ornamen dalam tombol */}
                    <img
                    src="/images/ornamen-button.svg"
                    alt=""
                    className="absolute inset-0 opacity-10 w-full h-full object-cover pointer-events-none"
                    />
                    <span className="relative z-10 text-xl">+</span>
                    <span className="relative z-10">Tambahkan ke Calendar</span>
                </button>
                </motion.div>
            </div>
            </motion.div>
        </section>
        </>
    );
}
