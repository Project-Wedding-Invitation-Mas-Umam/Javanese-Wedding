import config from '@/config/config';
import { motion } from 'framer-motion';
import { CopyCheck, Gift } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Gifts() {
    const [copiedAccount, setCopiedAccount] = useState(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const copyToClipboard = (text, bank) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(bank);
        setTimeout(() => setCopiedAccount(null), 2000);
    };

    return (
        <section id="gifts" className="bg-[#EEDCDA] relative overflow-hidden">
            <img
                src="/images/bunga-card.svg"
                alt="Dekorasi Bunga Kiri Atas"
                className="absolute -top-10 -left-2 w-48 md:w-64 opacity-20 z-0 scale-y-[-1]"
            />
            <img
                src="/images/bunga-card.svg"
                alt="Dekorasi Bunga Kanan Bawah"
                className="absolute bottom-0 -right-2 w-48 md:w-64 opacity-20 scale-x-[-1] z-0"
            />

            <div className="container mx-auto px-4 py-12 relative z-10">
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
                    Kirim Hadiah
                </motion.span>

                {/* Decorative Divider */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={hasAnimated ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-[#2B2326]" />
                    <Gift className="w-5 h-5 text-rose-400" />
                    <div className="h-[1px] w-12 bg-[#2B2326]" />
                </motion.div>
                </motion.div>

                {/* Bank Accounts Grid */}
                <div className="grid grid-cols-2 gap-6 px-4">
                    {config.data.banks.map((account, index) => (
                        <motion.div
                            key={account.accountNumber}
                            initial={{ opacity: 0, y: 20 }}
                            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index + 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative bg-[#3E3235] bg-opacity-70 text-white rounded-2xl p-6 shadow-md transition-all cursor-pointer ${
                                copiedAccount === account.bank ? 'bg-green-600' : ''
                        }`}
                        onClick={() => copyToClipboard(account.accountNumber, account.bank)}
                        >
                        <h3 className="text-center font-semibold text-lg mb-2">{account.bank}</h3>
                        <p className="text-center font-mono text-base mb-1">{account.accountNumber}</p>
                        <p className="text-center text-sm">a.n. {account.accountName}</p>

                        {/* Copy feedback icon */}
                        {copiedAccount === account.bank && (
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute top-2 right-2 text-white"
                            >
                            <CopyCheck className="w-5 h-5 text-lime-300" />
                            </motion.div>
                        )}
                        </motion.div>
                    ))}
                </div>

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
