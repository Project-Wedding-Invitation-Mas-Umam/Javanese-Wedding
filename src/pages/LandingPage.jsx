// src/pages/LandingPage.jsx
import config from '@/config/config';
import { safeBase64 } from '@/lib/base64';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LandingPage = ({ onOpenInvitation }) => {
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

  return (
  <div className="fixed min-h-screen w-full flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#241B1E_0%,_#2C2427_100%)]">
    <motion.div
      className="mx-auto w-full max-w-[430px] min-h-screen bg-white relative overflow-hidden shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #241B1E 0%, #2C2427 100%)',
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Card Container */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Konten di atas blur */}
            <div className="relative flex flex-col justify-center px-4 py-6 m-6 z-10">
              {/* Top Decorative Line */}
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <div className="h-px w-12 sm:w-16 bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <div className="h-px w-12 sm:w-16 bg-white/30" />
              </div>

              {/* Date and Greeting */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
              >
                <div className="mb-6 text-center">
                  <p className="text-sm text-white/80">Yth. Bapak/Ibu/Saudara/i</p>
                  <h2 className="text-lg text-white/80 font-semibold">{guestName || 'Tamu Undangan'}</h2>
                </div>
              </motion.div>

              {/* Couple Names */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center space-y-4"
              >
                <div className="space-y-2">
                  <p className="text-sm text-white/70">The Wedding of</p>
                  <h1 className="text-[48px] sm:text-[60px] font-praise text-pink-100 leading-tight">
                    {config.data.groomName}
                  </h1>
                  <span className="text-3xl font-semibold text-white/70">&</span>
                  <h1 className="text-[48px] sm:text-[60px] font-praise text-pink-100 leading-tight">
                    {config.data.brideName}
                  </h1>
                  <p className="text-sm mt-3 text-white/70">Jumat, 4 Juni 2027</p>
                </div>
              </motion.div>

              {/* Open Invitation Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 sm:mt-8 flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenInvitation}
                  className="relative w-full max-w-xs px-6 py-3 rounded-xl bg-gradient-to-r from-[#d8cdc9] to-[#d8cfcf] text-[#2e2b2b] font-medium shadow-md transition-all duration-300"
                >
                  Buka Undangan

                  {/* Efek glow lembut saat hover */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gunungan Decorations */}
      <img
        src="/images/Gunungan.svg"
        alt="Gunungan Kiri"
        className="absolute bottom-[-15px] left-0 w-28 md:w-40 lg:w-48 
                  opacity-20 rotate-[20deg] transform 
                  pointer-events-none"
      />
      <img
        src="/images/Gunungan.svg"
        alt="Gunungan Kanan"
        className="absolute bottom-[-30px] right-[-10px] w-48 md:w-60 lg:w-64 
                  opacity-80 rotate-[-20deg] transform scale-x-[-1] 
                  pointer-events-none"
      />
    </motion.div>
  </div>
  );
};

export default LandingPage;
