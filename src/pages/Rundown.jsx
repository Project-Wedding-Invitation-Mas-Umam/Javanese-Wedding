import config from "@/config/config";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

// ✅ Reusable Rundown Card Component
const RundownCard = ({ title, rundownList }) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-tl-[5rem] rounded-br-[5rem] border border-[#EEDCDA] bg-[#3E3235] px-6 py-8 text-white w-full max-w-md mx-auto"
        >
        <h3 className="text-center text-xl font-semibold mb-6">{title}</h3>
        <div className="space-y-6">
            {rundownList.map((item, index) => (
            <div key={index} className="text-center">
                <p className="font-bold text-lg">{item.time}</p>
                <p className="text-sm">{item.activity}</p>
            </div>
            ))}
        </div>
        </motion.div>
    );
};

export default function Rundown() {
    return (
        <section id="Rundown" className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Section Header */}
                
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center space-y-4 mb-10"
                >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block text-white text-4xl md:text-3xl font-praise mb-2"
                >
                    Rundown Acara
                </motion.span>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-rose-200" />
                    <ClipboardList className="w-5 h-5 text-rose-400" />
                    <div className="h-[1px] w-12 bg-rose-200" />
                </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 px-4">
                    {/* Gunungan Atas */}
                    <img
                        src="/images/Gunungan.svg"
                        alt="Gunungan"
                        className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20 rotate-[15deg] w-full max-w-[300px] z-0"
                    />

                    {/* Gunungan Bawah (dibalik) */}
                    <img
                        src="/images/Gunungan.svg"
                        alt="Gunungan"
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 rotate-[-15deg] w-full max-w-[300px] z-0"
                    />

                    {[
                        { title: "Akad Nikah", data: config.data.akadNikah },
                        { title: "Resepsi", data: config.data.resepsiNikah },
                    ].map((item, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        className="w-full"
                        >
                        <RundownCard title={item.title} rundownList={item.data} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
