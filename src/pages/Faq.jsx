import config from '@/config/config';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Faq() {
    const faqList = config.data.faqData || [];
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#3E3235] py-12 text-white relative overflow-hidden">
            <div className="container mx-auto max-w-2xl relative z-10 pb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center text-2xl font-serif mb-8"
                >
                FAQ
                </motion.h2>

                <div className="space-y-4">
                    {faqList.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#F4DADA] text-black rounded-xl px-5 py-4 transition duration-300">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center font-medium text-left"
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? (
                            <ChevronUp className="w-5 h-5" />
                            ) : (
                            <ChevronDown className="w-5 h-5" />
                            )}
                        </button>

                        <AnimatePresence initial={false}>
                            {openIndex === index && faq.answer && (
                            <motion.div
                                key="answer"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-3 pl-2 text-sm border-l-2 border-black">
                                — {faq.answer}
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
