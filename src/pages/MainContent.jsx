import Brides from '@/pages/Brides';
import Countdown from '@/pages/Countdown';
import Events from '@/pages/Events';
import Faq from '@/pages/Faq';
import Footer from '@/pages/Footer';
import Gallery from '@/pages/Gallery';
import Gifts from '@/pages/Gifts';
import Hero from '@/pages/Hero';
import Recom from '@/pages/Recom';
import Rundown from '@/pages/Rundown';
import StoryMe from '@/pages/StoryMe';
import Streaming from '@/pages/Streaming';
import Wishes from '@/pages/Wishes';

// Main Invitation Content
export default function MainContent() {
    return (
        <div className="bg-[linear-gradient(to_bottom_right,_#241B1E_0%,_#2C2427_100%)] min-h-screen w-full">
        <Hero />
        <Brides />
        <Gallery />
        <Countdown />
        <Events />
        <Rundown />
        <Recom />
        <Wishes />
        <Gifts />
        <Streaming />
        <StoryMe />
        <Faq />
        <Footer />
        </div>
    );
}
