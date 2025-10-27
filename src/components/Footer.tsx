// Removed Link import because it requires a surrounding <Router> component,
// which caused the "Cannot destructure property 'basename'" error in a single-file environment.
import {Instagram, Mail} from 'lucide-react';

export default function Footer() {
    return (
        // Changed py-8 to py-4 for a smaller vertical profile
        <footer className="bg-black/80 backdrop-blur-sm text-white py-4 px-8">
            {/* New Layout: Uses flexbox (flex-col) for mobile,
                and switches to a row (md:flex-row) using md:justify-around
                to evenly space all 5 elements on a single line for desktop.
                Changed gap-6 md:gap-12 to gap-4 md:gap-8 for less horizontal spacing.
            */}
            <div className="w-full flex flex-col md:flex-row md:justify-around items-center gap-4 md:gap-8">

                {/* 1. Copyright */}
                {/* Now a direct child of the flex container */}
                <a href="https://nextmantra.com" className="text-sm hover:text-yellow-400 transition-colors flex-shrink-0"
                   target={'_blank'}>
                    &copy;2025 Agantra Inovatif OÜ
                </a>

                {/* 2. Instagram */}
                {/* Simplified to just the link element */}
                <a href="https://www.instagram.com/synergeast"
                   className="hover:text-yellow-400 transition-colors flex-shrink-0">
                    <Instagram size={24}/>
                </a>

                {/* 3. Newsletter */}
                {/* Simplified to just the link element */}
                <a href="#" className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors flex-shrink-0">
                    <Mail size={18}/>
                    <span>Newsletter (come soon)</span>
                </a>

                {/* 4. About Us - Changed from <Link> to <a> to avoid routing error */}
                <a href="/about" className="text-sm hover:text-yellow-400 transition-colors flex-shrink-0">
                    About Us
                </a>

                {/* 5. Contact - Changed from <Link> to <a> to avoid routing error */}
                <a href="/contact" className="text-sm hover:text-yellow-400 transition-colors flex-shrink-0">
                    Contact
                </a>
            </div>
        </footer>
    );
}
