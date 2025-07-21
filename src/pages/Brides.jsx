import config from '@/config/config';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";

export default function Brides() {

    const Card = ({ name, desc, photo, reverse = false, ornamentPosition = "left" }) => (
        <div className={`flex flex-row ${reverse ? 'flex-row-reverse' : ''} items-center gap-4`}>
            {/* FOTO */}
            <div className="relative inline-block">
                <div className="rounded-t-[60px] md:rounded-t-[100px] border-[4px] md:border-[6px] border-[#f5e5e7] overflow-hidden bg-white w-32 h-44 md:w-40 md:h-52">
                    <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>

                {/* ORNAMEN */}
                <div
                    className={`absolute -bottom-3 md:-bottom-6 ${
                    ornamentPosition === 'left' ? '-left-8 md:-left-10' : '-right-8 md:-right-10'
                    } w-24 h-24 md:w-32 md:h-32`}
                >
                    <img
                    src="/images/bingkai.svg"
                    alt="Ornamen"
                    className={`w-full h-full ${
                        ornamentPosition === 'right' ? 'scale-x-[-1]' : ''
                    }`}
                    />
                </div>
            </div>

            {/* INFO */}
            <div className="text-left text-white space-y-2 max-w-xs">
            <h3 className="font-praise text-3xl md:text-4xl">{name}</h3>
            <p className="text-sm font-serif whitespace-pre-line">{desc}</p>
            <div className="flex justify-start">
                <FaInstagram className="text-white text-lg" />
            </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Event Section */}
            <section id="bride" className="relative overflow-hidden">
            <img
                src="/images/Gunungan.svg"
                alt="Gunungan"
                className="absolute opacity-20 rotate-[25deg] bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] z-0"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 container mx-auto px-4 py-20"
            >
                <div className="flex flex-col items-center justify-center gap-5 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        >
                        <Card
                            name={config.data.brideName}
                            desc={`Putri dari\n${config.data.parentBride}`}
                            photo="/images/bride.svg"
                            reverse={true}
                            ornamentPosition="right"
                        />
                    </motion.div>

                    <motion.span
                        className="text-5xl text-white font-serif"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        >
                        &
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        >
                        <Card
                            name={config.data.groomName}
                            desc={`Putra dari\n${config.data.parentGroom}`}
                            photo="/images/groom.svg"
                            reverse={false}
                            ornamentPosition="left"
                        />
                    </motion.div>

                </div>

            </motion.div>
        </section>
        </>
    )
}